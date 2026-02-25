'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

interface UseClubActionProps {
  userid: string;
  clubid: number;
  onEnrollSuccess: () => void;
  onLeaveSuccess: () => void;
}

export const useClubAction = ({
  userid,
  clubid,
  onEnrollSuccess,
  onLeaveSuccess,
}: UseClubActionProps) => {
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [banned, setBanned] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Page load дээр TTL сэргээх
  useEffect(() => {
    const fetchBan = async () => {
      try {
        const res = await fetch(
          `/api/club/ban-status?userId=${userid}&clubId=${clubid}`
        );
        const data = await res.json();
        if (data.remainingTime && data.remainingTime > 0) {
          setRemainingTime(data.remainingTime);
          setBanned(true);
        }
      } catch (err) {
        console.error('Fetch ban status error', err);
      }
    };
    fetchBan();
  }, [userid, clubid]);

  // 🔹 Countdown effect
  useEffect(() => {
    if (!remainingTime) return;

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (!prev || prev <= 1) {
          clearInterval(interval);
          setBanned(false);
          toast.success('Клуб руу нэгдэх боломжтой боллоо!');
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  // 🔹 Join button click
  const handleEnroll = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/club/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userid, clubId: clubid }),
      });

      if (res.status === 403) {
        const data = await res.json();
        setRemainingTime(data.remainingTime);
        setBanned(true);
        return;
      }

      const data = await res.json();
      if (data.remainingTime) {
        setRemainingTime(data.remainingTime);
        setBanned(true);
      }

      onEnrollSuccess();
    } catch (err) {
      console.error('Join error:', err);
    } finally {
      setLoading(false);
    }
  }, [userid, clubid, onEnrollSuccess]);

  // 🔹 Leave button click
  const handleLeave = useCallback(async () => {
    const confirmLeave = window.confirm(
      'Та клубээс гарахдаа итгэлтэй байна уу?'
    );
    if (!confirmLeave) return;

    setLoading(true);
    try {
      const res = await fetch('/api/club/leave', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userid, clubId: clubid }),
      });

      const data = await res.json();
      if (data.remainingTime) {
        setRemainingTime(data.remainingTime);
        setBanned(true);
      }

      onLeaveSuccess();
    } catch (err) {
      console.error('Leave error:', err);
    } finally {
      setLoading(false);
    }
  }, [userid, clubid, onLeaveSuccess]);

  return {
    remainingTime,
    banned,
    loading,
    handleEnroll,
    handleLeave,
  };
};

// const {
//   remainingTime,
//   banned,
//   loading,
//   handleEnroll,
//   handleLeave,
// } = useClubAction({
//   userid: '123',
//   clubid: 1,
//   onEnrollSuccess: () => console.log('Joined!'),
//   onLeaveSuccess: () => console.log('Left!'),
// });
