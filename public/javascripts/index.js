var config = {
    apiKey: "AIzaSyAcFp05opE1cXUUcYLbqnFcC50QkZuq5aw",
    authDomain: "vk-hackathon.firebaseapp.com",
    databaseURL: "https://vk-hackathon.firebaseio.com",
    projectId: "vk-hackathon",
    // storageBucket: "<BUCKET>.appspot.com",
    // messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(config);

let heatmap = h337.create({
    container: document.getElementById('container')
    , radius: 60
});

firebase.database().ref('/users/points').once('value').then(
    snap => {
        let points = snap.val();
        // console.log(points);
        points = Object.values(points);
        points = points.reduce((acc,item) => {
            item.value = 0.3;
            acc.push(item);
            return acc;
        },[]);
        // points.map(item => {
        //     console.log(item);
        //     heatmap.addData(item);
        // })
        heatmap.addData(points);
        // console.log({
        //     max: 100,
        //     min: 0,
        //     data: points
        // // });
        // heatmap.setData({
        //     max: 100,
        //     min: 0,
        //     data: points
        // });
    }
);
// document.querySelector('.demo-wrapper').onclick = function(ev) {
//     console.log(ev.layerX, ev.layerY)
//     firebase.database().ref('/users/points').push({
//         x: ev.layerX,
//         y: ev.layerY
//     });
//         //     y: ev.layerY,})
//     heatmap.addData({
//         x: ev.layerX,
//         y: ev.layerY,
//         value: 0.3
//     });
// };

// var canvas = document.getElementById('heatmap');
// var ctx = canvas.getContext('2d');
// var image = document.getElementById('source');

// ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);

// const pushData = (data) => {
//     firebase.database().ref('/users/today').push(data);
// };
//
// let data = {
//     x: ['30.10', '31.10', '01.11', '02.11', '03.11', '04.11', '05.11', '06.11', '07.11', '08.11', '09.11', '10.11']
//     , total: [2, 5, 9, 26, 28, 48, 18, 16, 12, 70, 175, 182]
//     , new: [2, 4, 7, 14, 16, 20, 2, 6, 3, 24, 75, 90]
// };

data.x.map((item, index) => {
    // firebase.database().ref('/users/today').push({
    console.log({
        total: data.total[index],
        new: data.new[index],
        date: data.x[index],
    })
});