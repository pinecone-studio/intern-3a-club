//apps/club-web/components/create-club/CreateClubCenter.tsx
'use client';
import { useCreateClub } from './useCreateClub';
import { Step1 } from './Step1';
import { SideSection } from './SideSection';

export const CreateClubCenter = () => {
  const { formData, handleFormChange, errors, handleSubmit, loading } =
    useCreateClub();

  console.log('=========================================');
  console.log('formData:', formData);
  console.log('=========================================');
  console.log('errors:', errors);
  console.log('=========================================');

  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-12 relative z-10">
      <h1 className="text-2xl font-bold text-white mb-8">Клуб Нээх</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-blue-900/20 bg-gradient-to-br from-slate-900/80 to-blue-900/40 p-6 backdrop-blur-sm shadow-xl">
            <div className="space-y-8">
              <Step1
                formData={formData}
                setFormData={handleFormChange}
                errors={errors}
              />

              <button
                disabled={loading}
                onClick={handleSubmit}
                className="w-full h-12 rounded-xl bg-blue-600 text-white font-bold uppercase hover:bg-blue-500 transition disabled:opacity-50"
              >
                {loading ? 'Илгээж байна...' : 'Хүсэлт илгээх'}
              </button>
            </div>
          </div>
        </div>
        <SideSection />
      </div>
    </div>
  );
};
