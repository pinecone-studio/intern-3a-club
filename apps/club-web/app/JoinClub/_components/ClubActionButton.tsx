'use client';

import React, { useEffect, useState } from 'react';
import { LogOut, Timer } from 'lucide-react';
import { cn } from 'lib/utils';
import { CustomButton } from './CustomButton';
import { toast } from 'sonner';

interface ActionProps {
  isEnrolled: boolean;
  status: string;
  onEnroll: () => void;
  onLeave: () => void;
  className?: string;
  clubid: number;
}

export const ClubActionButtons = (props: ActionProps) => {
  const { isEnrolled, status, onEnroll, onLeave, className = '' } = props;

  // Mocked user / club
  const userid = '123';
  const clubid = props.clubid;

  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [banned, setBanned] = useState(false);

  // ⏳ Page load дээр TTL сэргээх (mock / API call оронд hardcode check)
  useEffect(() => {
    // Mocked fetch
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
  }, []);

  // ⏳ Countdown effect
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

  // Join button click
  const handleEnroll = async () => {
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

      onEnroll();
    } catch (err) {
      console.error('Join error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Leave button click
  const handleLeave = async () => {
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

      onLeave();
    } catch (err) {
      console.error('Leave error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Enrolled бол leave button
  if (isEnrolled) {
    return (
      <CustomButton
        variant="destructive"
        onClick={handleLeave}
        disabled={loading || banned}
        className={cn(
<<<<<<< HEAD
          'w-full py-6 text-sm border border-red-500/20 bg-red-500/10 hover:bg-red-500 transition-all duration-300',
=======
          'w-full py-6 text-sm transition-all duration-300',
          banned
            ? 'bg-red-600 text-white border border-red-500 cursor-not-allowed'
            : 'bg-red-500/10 border border-red-500/20 hover:bg-red-500',
          loading && 'opacity-50 cursor-wait',
>>>>>>> 88fe588 (codegen config)
          className
        )}
      >
        {loading ? (
          <span className="animate-pulse">...</span>
        ) : (
          <>
            <LogOut className="mr-2 h-5 w-5" /> Клубээс гарах
          </>
        )}
      </CustomButton>
    );
  }

<<<<<<< HEAD
  return (
    <div className="space-y-4">
      <CustomButton
        // CustomButton-д зориулсан Dashboard стиль
        disabled={status === 'Full' || isLocked}
        onClick={onEnroll}
        className={cn(
          'w-full py-7 text-sm transition-all duration-300 shadow-xl',
          isLocked || status === 'Full'
            ? 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed opacity-50'
            : 'bg-blue-600 text-white hover:bg-blue-500 border border-blue-400/30 shadow-blue-600/20',
          className
        )}
      >
        <ButtonContent
          isLocked={isLocked}
          time={remainingTime}
          status={status}
        />
      </CustomButton>
=======
  // Join button
  const isLocked = remainingTime !== null || banned;
>>>>>>> 88fe588 (codegen config)

  return (
    <CustomButton
      disabled={status === 'Full' || isLocked || loading}
      onClick={handleEnroll}
      className={cn(
        'w-full py-7 text-sm transition-all duration-300 shadow-xl',
        isLocked || status === 'Full' || loading
          ? 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed opacity-50'
          : 'bg-blue-600 text-white hover:bg-blue-500 border border-blue-400/30 shadow-blue-600/20',
        banned && 'bg-red-600 text-white border border-red-500',
        className
      )}
    >
      {loading ? (
        <span className="flex items-center justify-center animate-pulse">
          ...
        </span>
      ) : isLocked ? (
        <span className="flex items-center justify-center">
          <Timer className="h-5 w-5 animate-spin mr-2" />
          {remainingTime}с хүлээх
        </span>
      ) : (
        <span>{status === 'Open' ? 'Одоо нэгдэх' : 'Суудал дүүрсэн'}</span>
      )}
    </CustomButton>
  );
};
