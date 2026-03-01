import React, { useCallback } from 'react';
import { GetAllTeacher } from './types';

interface TeacherCheckboxProps {
    teacher: GetAllTeacher;
    isSelected: boolean;
    onToggle: (_id: string) => void;
}

const TeacherCheckbox = ({
    teacher,
    isSelected,
    onToggle,
}: TeacherCheckboxProps) => {
    const handleChange = useCallback(() => {
        onToggle(teacher.id);
    }, [onToggle, teacher.id]);

    return (
        <label className="flex items-center gap-2 text-white">
            <input type="checkbox" checked={isSelected} onChange={handleChange} />
            <span className="ml-2">
                {teacher.firstName} {teacher.lastName || ''}
            </span>
        </label>
    );
};

interface PreferredTeacherListProps {
    teachers: GetAllTeacher[];
    selectedIds: string[];
    onToggle: (_id: string) => void;
}

export const PreferredTeacherList = ({
    teachers,
    selectedIds,
    onToggle,
}: PreferredTeacherListProps) => {
    if (!teachers || teachers.length === 0) {
        return <p className="text-sm text-white/60">Багшийн мэдээлэл олдсонгүй</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {teachers.map((t) => (
                <TeacherCheckbox
                    key={t.id}
                    teacher={t}
                    isSelected={selectedIds.includes(t.id)}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};
