'use client';

import { gql } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client/react';
import { useState, useMemo } from 'react';

/* ================= GRAPHQL QUERIES & MUTATIONS ================= */

const GET_CLUBS = gql`
  query GetClubs {
    getClubs {
      id
      name
      description
      status
    }
  }
`;

const CREATE_CLUB = gql`
  mutation CreateClub($input: CreateClubInput!) {
    createClub(input: $input) {
      id
      name
      description
      status
    }
  }
`;

const UPDATE_CLUB = gql`
  mutation UpdateClub($input: UpdateClubInput!) {
    updateClub(input: $input) {
      id
      name
      description
      status
    }
  }
`;

const DELETE_CLUB = gql`
  mutation DeleteClub($id: ID!) {
    deleteClub(id: $id)
  }
`;

/* ================= TYPES ================= */

type ClubStatus = 'pending' | 'approved' | 'declined';

interface Club {
  id: string;
  name: string;
  description?: string | null;
  status: ClubStatus;
}

interface GetClubsData {
  getClubs: Club[];
}

interface CreateClubVars {
  input: {
    name: string;
    description?: string;
    type: string;
  };
}

interface UpdateClubVars {
  input: {
    id: string;
    name?: string;
    description?: string;
    status?: ClubStatus;
  };
}

/* ================= COMPONENT ================= */

export default function ClubsList() {
  // Queries
  const { loading, error, data, refetch } = useQuery<GetClubsData>(GET_CLUBS);

  // Mutations
  const [createClub, { loading: creating }] = useMutation<any, CreateClubVars>(CREATE_CLUB);
  const [updateClub, { loading: updating }] = useMutation<any, UpdateClubVars>(UPDATE_CLUB);
  const [deleteClub] = useMutation<any, { id: string }>(DELETE_CLUB);

  // Local State
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Search Logic
  const filteredClubs = useMemo(() => {
    if (!data?.getClubs) return [];
    return data.getClubs.filter((club) =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  /* ================= HANDLERS ================= */

  const resetForm = () => {
    setName('');
    setDescription('');
    setEditingId(null);
  };

  const handleEditInit = (club: Club) => {
    setEditingId(club.id);
    setName(club.name);
    setDescription(club.description || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = async () => {
    if (!name.trim()) return alert("Клубийн нэр заавал хэрэгтэй!");

    try {
      if (editingId) {
        // UPDATE LOGIC
        await updateClub({
          variables: {
            input: {
              id: editingId,
              name,
              description,
            },
          },
        });
      } else {
        // CREATE LOGIC
        await createClub({
          variables: {
            input: {
              name,
              description,
              type: "self",
            },
          },
        });
      }

      resetForm();
      await refetch();
    } catch (err) {
      console.error("Алдаа гарлаа:", err);
      alert("Үйлдэл амжилтгүй боллоо.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Та энэ клубийг устгахдаа итгэлтэй байна уу?")) return;

    try {
      await deleteClub({ variables: { id } });
      await refetch();
    } catch (err) {
      console.error("Устгахад алдаа гарлаа:", err);
    }
  };

  /* ================= RENDER HELPERS ================= */

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  if (error) return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
      <h2 className="font-bold">Алдаа гарлаа!</h2>
      <p>{error.message}</p>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Club Manager</h1>
        <p className="text-gray-500">Системийн клубуудыг удирдах хэсэг</p>
      </header>

      {/* --- FORM SECTION --- */}
      <section className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm mb-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          {editingId ? 'Клуб засах' : 'Шинэ клуб нэмэх'}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Нэр</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Клубийн нэр..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Тайлбар</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition h-24"
              placeholder="Клубийн зорилго, үйл ажиллагаа..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={creating || updating}
              className={`flex-1 py-3 rounded-lg text-white font-bold shadow-lg transition duration-200 ${
                editingId ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'
              } disabled:opacity-50`}
            >
              {creating || updating ? 'Түр хүлээнэ үү...' : editingId ? 'Өөрчлөлтийг хадгалах' : 'Клуб үүсгэх'}
            </button>
            
            {editingId && (
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition"
              >
                Болих
              </button>
            )}
          </div>
        </div>
      </section>

      {/* --- LIST SECTION --- */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Нийт клубууд ({filteredClubs.length})</h2>
          <div className="relative">
            <input 
              type="text"
              placeholder="Хайх..."
              className="pl-4 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filteredClubs.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
              Илэрц олдсонгүй
            </div>
          ) : (
            filteredClubs.map((club) => (
              <div 
                key={club.id} 
                className={`group p-5 rounded-2xl border transition duration-200 flex justify-between items-center ${
                  editingId === club.id ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-blue-200 hover:shadow-md bg-white'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
                    <StatusBadge status={club.status} />
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2 pr-4 italic">
                    {club.description || 'Тайлбар оруулаагүй байна.'}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditInit(club)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition"
                    title="Засах"
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={() => handleDelete(club.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                    title="Устгах"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

/* ================= SUB-COMPONENTS & ICONS ================= */

function StatusBadge({ status }: { status: ClubStatus }) {
  const styles = {
    approved: 'bg-green-100 text-green-700',
    pending: 'bg-amber-100 text-amber-700',
    declined: 'bg-red-100 text-red-700',
  };

  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  );
}

function EditIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
  );
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  );
}