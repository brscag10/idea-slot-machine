interface SlotPhysicsConfig {
  startingSlotVelocityMS: Range<number>;
  finalTickInterval: Range<number>;
  frictionCoeffecient: number;
}

interface PhysicsFrame {
  finalTickInterval: number;
  nextTimeout: number;
}
