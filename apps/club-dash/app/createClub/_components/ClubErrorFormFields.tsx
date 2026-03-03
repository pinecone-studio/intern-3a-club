import React from 'react';
import { Textarea, Label } from '@intern-3a-club/shadcn';
import { Teachers } from './index';

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type ClubFormFieldsProps = {
  clubName: string;
  clubDesc: string;
  teacherId: string;
  clubNameError?: string;
  teacherIdError?: string;
  clubDescError?: string;
  onNameChange: (_e: ChangeEvent) => void;
  onDescChange: (_e: ChangeEvent) => void;
  onTeacherChange: (_id: string) => void;
};

const ClubNameField = ({
  clubName,
  clubNameError,
  onNameChange,
}: Pick<
  ClubFormFieldsProps,
  'clubName' | 'clubNameError' | 'onNameChange'
>) => {
  return (
    <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="clubName">Клубын нэр</Label>
      <Textarea
        rows={1}
        className="min-h-0 h-[40px] py-1"
        id="clubName"
        placeholder="Клубын нэр"
        value={clubName}
        onChange={onNameChange}
      />
      {clubNameError && <p className="text-red-500 text-xs">{clubNameError}</p>}
    </div>
  );
};

const TeacherField = ({
  teacherId,
  teacherIdError,
  onTeacherChange,
}: Pick<
  ClubFormFieldsProps,
  'teacherId' | 'teacherIdError' | 'onTeacherChange'
>) => {
  return (
    <div className="flex flex-col gap-1">
      <Teachers teacherId={teacherId} setTeacherId={onTeacherChange} />
      {teacherIdError && (
        <p className="text-red-500 text-xs">{teacherIdError}</p>
      )}
    </div>
  );
};

const ClubDescField = ({
  clubDesc,
  clubDescError,
  onDescChange,
}: Pick<
  ClubFormFieldsProps,
  'clubDesc' | 'clubDescError' | 'onDescChange'
>) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="description">Клубын зорилго</Label>
      <Textarea
        id="description"
        placeholder="Клубын зорилго"
        value={clubDesc}
        onChange={onDescChange}
      />
      {clubDescError && <p className="text-red-500 text-xs">{clubDescError}</p>}
    </div>
  );
};

export const ClubFormFields = (props: ClubFormFieldsProps) => {
  return (
    <>
      <div className="flex justify-between items-end gap-3">
        <ClubNameField
          clubName={props.clubName}
          clubNameError={props.clubNameError}
          onNameChange={props.onNameChange}
        />
        <TeacherField
          teacherId={props.teacherId}
          teacherIdError={props.teacherIdError}
          onTeacherChange={props.onTeacherChange}
        />
      </div>
      <ClubDescField
        clubDesc={props.clubDesc}
        clubDescError={props.clubDescError}
        onDescChange={props.onDescChange}
      />
    </>
  );
};
