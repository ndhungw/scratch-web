import { users_table } from "../../constants/data";

const TIME_TO_WAIT = 3000;

// // fake call api
// const fetchAPI = (data) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 3000);
//   });
// };

export const getUsers = () => {
  new Promise((resolve, reject) => {
    if (users_table.length === 0) {
      return setTimeout(
        () => reject(new Error("Users not found")),
        TIME_TO_WAIT
      );
    }
    setTimeout(() => {
      resolve(users_table);
    }, TIME_TO_WAIT);
  });
};

export const getUser = (id) => {
  const found = users_table.filter((item) => item.id === id)[0];

  new Promise((resolve, reject) => {
    if (!found) {
      return setTimeout(
        () => reject(new Error("User not found")),
        TIME_TO_WAIT
      );
    }
    setTimeout(() => {
      resolve(found);
    }, TIME_TO_WAIT);
  });
};

export const updateUser = (id, dataToUpdate) => {
  const found = users_table.filter((item) => item.id === id)[0];

  new Promise((resolve, reject) => {
    if (!found) {
      return setTimeout(
        () => reject(new Error("User not found")),
        TIME_TO_WAIT
      );
    }

    //
    const userToUpdate = { ...found, ...dataToUpdate };

    users_table.map((item) => {
      if (item.id === id) {
        return userToUpdate;
      }
      return item;
    });

    setTimeout(() => {
      resolve({
        message: "Update user successfully",
        updatedUser: userToUpdate,
      });
    }, TIME_TO_WAIT);
  });
};
