import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const result = [];
      values.forEach((element) => {
        if (element.status === 'fulfilled') {
          result.push({ status: element.status, value: element.value });
        } else {
          result.push({ status: element.status, value: String(element.reason) });
        }
      });
      return result;
    });
}
