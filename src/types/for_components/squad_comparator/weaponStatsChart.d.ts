export interface DPSChartOption {
  isAppliedMoving: boolean;
  selectedArmor: 'none' | 'front' | 'side' | 'rear';
}

export interface RPMChartOption {
  isAppliedMoving: boolean;
}

export interface AccuracyChartOption {
  isAppliedTargetSize: boolean;
  isAppliedMoving: boolean;
}

export interface PenetrationChartOption {
  selected: string;
}

export interface WeaponStatsChartOptions {
  dps: DPSChartOption;
  rpm: RPMChartOption;
  accuracy: AccuracyChartOption;
  penetration: Penetration;
}
