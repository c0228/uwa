export const STATE_RULES = {
  "Telangana": {
    residential: { stampRate: 0.005, registrationAfterMonths: 11 },
    commercial: { stampRate: 0.005, registrationAfterMonths: 11 }
  },
  "Andhra Pradesh": {
    residential: { stampRate: 0.005, registrationAfterMonths: 12 },
    commercial: { stampRate: 0.005, registrationAfterMonths: 12 }
  },
  "Karnataka": {
    residential: { stampRate: 0.01, registrationAfterMonths: 11 },
    commercial: { stampRate: 0.01, registrationAfterMonths: 11 }
  },
  "Maharashtra": {
    residential: { stampRate: 0.0025, registrationAlways: true },
    commercial: { stampRate: 0.005, registrationAlways: true }
  },
  "Tamil Nadu": {
    residential: { stampRate: 0.01, registrationAfterMonths: 11 },
    commercial: { stampRate: 0.01, registrationAfterMonths: 11 }
  },
  "Delhi": {
    residential: { stampRate: 0.02, registrationAfterMonths: 11 },
    commercial: { stampRate: 0.02, registrationAfterMonths: 11 }
  }
};
