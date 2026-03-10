import { MockStudents } from '../../../../../libs/mock';

export const StudentList = ({ open }: { open: boolean }) => (
  <>
    {open && (
      <div className="left-0 top-12 ml-3 z-20 w-[260px] h-fit bg-inherit p-3">
        <div className="grid grid-cols-5 gap-x-[100px] gap-y-2">
          {MockStudents.slice(0, 10).map((student) => (
            <div key={student.id} className="text-sm text-foreground/70 py-1">
              {student.studentCode}
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);
