export default function getCorrPhoneNumber(phoneNumber) {
    const seven = phoneNumber.replace(/^(8)/, '+7');
    return seven.replace(/[- /(/)]/g, '');
  }
  