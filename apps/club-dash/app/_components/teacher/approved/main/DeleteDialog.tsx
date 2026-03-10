import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@intern-3a-club/shadcn';

export const DeleteDialog = ({
  isDeleting,
  onConfirm,
}: {
  isDeleting: boolean;
  onConfirm: () => void;
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <button
        disabled={isDeleting}
        className="flex-1 py-2 rounded-2xl bg-secondary border border-border text-foreground/70 font-semibold uppercase text-xs hover:bg-red-500 hover:text-white"
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Клуб устгах уу?</AlertDialogTitle>
        <AlertDialogDescription>
          Та энэ клубыг устгахдаа итгэлтэй байна уу? Энэ үйлдлийг буцааж
          болохгүй.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Цуцлах</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>Устгах</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
