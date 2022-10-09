export const NAV_DETAILS = {
    PERSONAL_INCOME_TAX: {
      TYPE: 1,
      TITLE: 'Personal Income Tax',
      ACCOUNT_NUMBER: 'HU16 1003 2000 0605 6353 0000 0000',
      DESCRIPTION_ENDING: 'Személyi jövedelemadó',
      FORMULA: (amount) => amount * 0.89 * 0.15,
    },
    SOCIAL_CONTRIBUTION_TAX: {
      TYPE: 2,
      TITLE: 'Social Contribution Tax',
      ACCOUNT_NUMBER: 'HU12 1003 2000 0605 5912 0000 0000',
      DESCRIPTION_ENDING: 'Szociáis hozzájárulási adó',
      FORMULA: (amount) => amount * 0.89 * 0.13,
    }
};
