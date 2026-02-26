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

  // 🔹 Helper to reduce complexity in main functions
  const handleBanResponse = (time: number) => {
    if (time > 0) {
      setRemainingTime(time);
      setBanned(true);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const fetchBan = async () => {
      try {
        const res = await fetch(
          `/api/club/ban-status?userId=${userid}&clubId=${clubid}`
        );
        const data = await res.json();
        handleBanResponse(data.remainingTime);
      } catch (err) {
        console.error('Fetch error', err);
      }
    };
    fetchBan();
  }, [userid, clubid]);

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

  // helper function (Complexity: 2)
  const processJoinResult = (status: number, time: number) => {
    if (status === 403 || time > 0) {
      setRemainingTime(time);
      setBanned(true);
      return;
    }
    onEnrollSuccess();
  };

  // handleEnroll (Complexity: 3)
  const handleEnroll = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/club/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userid, clubId: clubid }),
      });
      const data = await res.json();

      // Zero branching here - just calling a helper
      processJoinResult(res.status, data.remainingTime);
    } catch (err) {
      console.error('Join error:', err);
    } finally {
      setLoading(false);
    }
  }, [userid, clubid, onEnrollSuccess]);
  const handleLeave = useCallback(async () => {
    if (!window.confirm('Та клубээс гарахдаа итгэлтэй байна уу?')) return;

    setLoading(true);
    try {
      const res = await fetch('/api/club/leave', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userid, clubId: clubid }),
      });
      const data = await res.json();
      handleBanResponse(data.remainingTime);
      onLeaveSuccess();
    } catch (err) {
      console.error('Leave error:', err);
    } finally {
      setLoading(false);
    }
  }, [userid, clubid, onLeaveSuccess]);

  return { remainingTime, banned, loading, handleEnroll, handleLeave };
};
