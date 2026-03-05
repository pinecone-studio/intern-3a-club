'use client';
import { useMutation, useQuery } from '@apollo/client/react';
import { Button } from '@intern-3a-club/shadcn';
import React from 'react';
import {
  DELETE_TIMETABLE,
  GET_ALL_APPROVED_CLUBS,
} from '../../libs/club-queries';
import { ApprovedClubsData } from '../../libs/types';

const page = () => {
  const {
    loading: isLoadingApproved,
    error: errClubApproved,
    data: clubDataApproved,
  } = useQuery<ApprovedClubsData>(GET_ALL_APPROVED_CLUBS);
  console.log(clubDataApproved, 'aprroved');

  const [deleteTimetable, { loading }] = useMutation(DELETE_TIMETABLE, {
    refetchQueries: [{ query: GET_ALL_APPROVED_CLUBS }],
    onCompleted: () => {
      // Хүсвэл энд Toast эсвэл Alert харуулж болно
      console.log('Амжилттай устлаа');
    },
    onError: (error) => {
      alert(`Алдаа гарлаа: ${error.message}`);
    },
  });

  const handleDelete = async (timetableId: string) => {
    if (window.confirm('Та энэ хуваарийг устгахдаа итгэлтэй байна уу?')) {
      await deleteTimetable({
        variables: { id: timetableId },
      });
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col gap-6">
          {clubDataApproved?.getAllApprovedClubs.map((club) => (
            <div key={club.id}>
              <div>{club.name}</div>
              <div>{club.id}</div>
              <div>
                {club.timetables.map((timetable) => (
                  <div key={timetable.id}>
                    <div className="bg-yellow-200">{timetable.date}</div>
                    <div>{timetable.id}</div>
                    <div>{timetable.clubId}</div>
                    <Button
                      onClick={() => handleDelete(timetable.id)}
                      disabled={loading}
                      className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                      {loading ? 'Устгаж байна...' : 'Устгах'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default page;
