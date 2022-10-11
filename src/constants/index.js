export const TAX_DETAILS = {

  HUN: {
    COUNTRY_SPECS: {
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
      },
    },
    BANK_DETAILS: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Otp_bank_Logo.svg/1920px-Otp_bank_Logo.svg.png',
        title: 'OTP Bank',
        link: 'https://www.otpbank.hu/portal/hu/OTPdirekt/Belepes',
      },
      {
        img: 'https://csaladivallalatok.kh.hu/wp-content/uploads/2019/12/KH-korlogo-1.png',
        title: 'K&H Bank',
        link: 'https://www.kh.hu/ebank',
      },
      {
        img: 'https://www.etfstream.com/media/24252/unicredit-bank-logo.png',
        title: 'UniCredit Bank',
        link: 'https://hu.unicreditbanking.eu/hu/login_form',
      },
      {
        img: 'https://www.benefitprize.hu/sites/default/files/styles/ceg_logo/public/images/erste-bank-hungary-zrt/huerste400x400.jpg?itok=IZZcZlWE',
        title: 'Erste Bank',
        link: 'https://netbank.erstebank.hu/erste-netbank-eloszto/erste-netbank-eloszto.html',
      },
      {
        img: 'https://www2.deloitte.com/content/dam/Deloitte/hu/Images/promo_images/hu-ma-tombstone-2016-cib-bank-noexp.jpg/_jcr_content/renditions/cq5dam.web.250.250.mobile.jpeg',
        title: 'CIB Bank',
        link: 'https://online.cib.hu/responsive/logon?timeout',
      },
      {
        img: 'https://1000logos.net/wp-content/uploads/2021/05/Raiffeisen-Bank-International-logo.png',
        title: 'Raiffeisen Bank',
        link: 'https://www.raiffeisen.hu/'

      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/MKB_Bank_logo.svg/958px-MKB_Bank_logo.svg.png',
        title: 'Budapest Bank / MKB',
        link: 'https://login-online.mkb.hu/authenticate',
      },
      {
        img: 'http://www.gordiusz95zrt.hu/wp-content/uploads/2012/01/Granit_bank_logo.jpg',
        title: 'Granit Bank',
        link: 'https://netbank.granitbank.hu/eib_ib/loginpage.hu.html',
      },
    ],
  },


  GBR: {
    COUNTRY_SPECS: {
      PRINCESS_DIANA_TAX: {
        TYPE: 1,
        TITLE: 'Princess Diana Tax',
        ACCOUNT_NUMBER: 'UK14 3333 THIS IS A FAKE ACC OFC',
        DESCRIPTION_ENDING: 'God Bless The Queen',
        FORMULA: (amount) => amount * 0.36 * 0.25,
      },
      PRINCE_CHARLES_TAX: {
        TYPE: 2,
        TITLE: 'Prince Charles Tax',
        ACCOUNT_NUMBER: 'UK14 4444 THIS IS A FAKE ACC OFC',
        DESCRIPTION_ENDING: 'God Bless The King',
        FORMULA: (amount) => amount * 0.50 * 0.12,
      },
      MEGHAN_MARKLE_TAX: {
        TYPE: 2,
        TITLE: 'Meghan Markle Tax',
        ACCOUNT_NUMBER: 'UK14 2222 THIS IS A FAKE ACC OFC',
        DESCRIPTION_ENDING: 'God Bless America',
        FORMULA: (amount) => amount * 0.89 * 0.13,
      },
    },
    BANK_DETAILS: [
      {
        img: 'https://placekitten.com/200/301',
        title: 'Royal Bank',
        link: 'https://www.royal.uk/',
      },
      {
        img: 'https://placekitten.com/201/300',
        title: 'Prince Bank',
        link: 'https://www.royal.uk/',
      },
      {
        img: 'https://placekitten.com/202/300',
        title: 'Princess Bank',
        link: 'https://www.royal.uk/',
      },
      {
        img: 'https://placekitten.com/200/303',
        title: 'King Bank',
        link: 'https://www.royal.uk/',
      },
      {
        img: 'https://placekitten.com/204/300',
        title: 'Queen Bank',
        link: 'https://www.royal.uk/',
      },
      {
        img: 'https://placekitten.com/200/304',
        title: 'Royal Puppies Bank',
        link: 'https://www.royal.uk/'

      },
      {
        img: 'https://placekitten.com/206/300',
        title: 'London Bank',
        link: 'https://www.royal.uk/',
      },
      {
        img: 'https://placekitten.com/200/306',
        title: 'Tea Bank',
        link: 'https://www.royal.uk/',
      },
    ],
  },




}
