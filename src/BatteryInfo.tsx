import React, { useState, useEffect } from 'react';

// If you haven't declared BatteryManager yet, declare it first
interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: ((this: BatteryManager, ev: Event) => any) | null;
  onchargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
  ondischargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
  onlevelchange: ((this: BatteryManager, ev: Event) => any) | null;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
}

// Extend the Navigator interface
declare global {
  interface Navigator {
    getBattery(): Promise<BatteryManager>;
  }
}

const BatteryInfo: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean>(false);

  // Your component implementation remains the same

  useEffect(() => {
    async function fetchBatteryInfo() {
      try {
        const battery: BatteryManager = await navigator.getBattery();
        setBatteryLevel(battery.level);
        setCharging(battery.charging);

        const updateCharging = () => setCharging(battery.charging);
        const updateBatteryLevel = () => setBatteryLevel(battery.level);

        battery.addEventListener('chargingchange', updateCharging);
        battery.addEventListener('levelchange', updateBatteryLevel);

        return () => {
          battery.removeEventListener('chargingchange', updateCharging);
          battery.removeEventListener('levelchange', updateBatteryLevel);
        };
      } catch (error) {
        console.error('Battery status is not supported.', error);
      }
    }

    fetchBatteryInfo();
  }, []);

  return (
    <div>
      <p>
        Battery Level: {batteryLevel !== null ? batteryLevel * 100 : 'N/A'}%
      </p>
      <p>Charging: {charging ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default BatteryInfo;
