"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyA6zZnfw7622INzyu-CDlTPtO6Nr7C5JTg",
    authDomain: "bagstore-531c5.firebaseapp.com",
    projectId: "bagstore-531c5",
    storageBucket: "bagstore-531c5.appspot.com",
    messagingSenderId: "853066326744",
    appId: "1:853066326744:web:5114eda7c9e5c4fdceedad",
    measurementId: "G-LEMJC9JF8H"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const storage = (0, storage_1.getStorage)(app);
const uploadImage = async (files, cate) => {
    const storageRef = (0, storage_1.ref)(storage, `${cate}/` + files.originalname);
    const uploadTask = await (0, storage_1.uploadBytesResumable)(storageRef, files.buffer);
    let url = (0, storage_1.getDownloadURL)(uploadTask.ref).then((downloadURL) => {
        return downloadURL;
    });
    return url;
};
exports.default = uploadImage;
//# sourceMappingURL=upload.js.map