'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { useMutation } from '@apollo/client/react';
import gql from 'graphql-tag';
const BAN_SECONDS = 20;

const JOIN_CLUB = gql`
  mutation JoinClub($clubId: ID!) {
    joinClub(clubId: $clubId) {
      id
      studentId
      joinedAt
    }
  }
`;

const LEAVE_CLUB = gql`
  mutation LeaveClub($clubId: ID!) {
    leaveClub(clubId: $clubId)
  }
`;

interface UseClubActionProps {
  userid: string;
  clubid: string;
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
  const [localLoading, setLocalLoading] = useState(false);
  const [joinMutation, { loading: joinLoading }] = useMutation(JOIN_CLUB);
  const [leaveMutation, { loading: leaveLoading }] = useMutation(LEAVE_CLUB);


  // 🔹 Helper to reduce complexity in main functions
  const handleBanResponse = (time: number) => {
    if (time > 0) {
      setRemainingTime(time);
      setBanned(true);
      return true;
    }

    setRemainingTime(null);
    setBanned(false);
    return false;
  };

  useEffect(() => {
    if (!userid || !clubid) {
      setRemainingTime(null);
      setBanned(false);
      return;
    }

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
  const processJoinResult = useCallback(
    (status: number, time: number) => {
      if (status === 403 || time > 0) {
        setRemainingTime(time);
        setBanned(true);
        return;
      }
      onEnrollSuccess();
    },
    [onEnrollSuccess] // eslint-disable-line react-hooks/exhaustive-deps
  );

  // handleEnroll (Complexity: 3)
  const handleEnroll = useCallback(async () => {
    if (!userid) {
      toast.error('Эхлээд нэвтэрнэ үү.');
      return;
    }

    setLocalLoading(true);
    try {
      const res = await fetch('/api/club/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userid, clubId: clubid }),
      });
      const data = await res.json();

      if (res.status === 403 || data.remainingTime > 0) {
        processJoinResult(res.status, data.remainingTime);
        return;
      }

      await joinMutation({ variables: { clubId: clubid } });
      onEnrollSuccess();
    } catch (err) {
      console.error('Join error:', err);
    } finally {
      setLocalLoading(false);
    }
  }, [userid, clubid, onEnrollSuccess, processJoinResult, joinMutation]); // eslint-disable-line react-hooks/exhaustive-deps
  const handleLeave = useCallback(async () => {
    if (!userid) {
      toast.error('Эхлээд нэвтэрнэ үү.');
      return;
    }

    if (
      !window.confirm(
        `Та клубээс гарахдаа итгэлтэй байна уу?\n\nГарвал энэ клубт ${BAN_SECONDS} секунд дахин нэгдэх боломжгүй болно.`
      )
    )
      return;

    setLocalLoading(true);
    try {
      await leaveMutation({ variables: { clubId: clubid } });

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
      setLocalLoading(false);
    }
  }, [userid, clubid, onLeaveSuccess, leaveMutation]);

  const loading = localLoading || joinLoading || leaveLoading;
  return { remainingTime, banned, loading, handleEnroll, handleLeave };
};
