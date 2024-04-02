function uploadProject() {
    fetch("https://randomuser.me/api/").then((data) => {
        var res = data.json();
        return res;
    }).then((res) => {
        // console.log(res.results[0].name);
        var user = res.results[0];
        var fullName = "Name : " + user.name.title + " " + user.name.first + " " + user.name.last;
        document.getElementById("name").innerText = fullName;
        document.getElementById("email").innerText = "E-mail : " + user.email;
        document.getElementById("gender").innerText = "Gender : "+ user.gender;



        var userDOB = new Date(user.dob.date);
        // document.getElementById("dob").innerText = "DOB : " + ${userDOB.getDate()} / ${userDOB.getMonth() + 1} / ${userDOB.getFullYear()};
        document.getElementById("dob").innerText = "DOB : " + userDOB.getDate() + "/" + (userDOB.getMonth() + 1) + "/" + userDOB.getFullYear();
            // const date = moment.unix(user.dob.date).format("DD/MM/YYYY");
            // console.log(date);

        document.getElementById("phone").innerHTML = "Phone Number : " + user.cell;

            document.getElementById("address").innerText = "Address : " + user.location.street.number +" "+ user.location.street.name;
        document.getElementById("password").innerHTML = "Password : "+ user.login.password;
        var photo = user.picture.large;
        document.getElementById('profile-pic').src = photo;
        console.log(photo);


        // console.log(${userDOB.getDate()} / ${userDOB.getMonth()+1} / ${userDOB.getFullYear()});
    })
        .catch((err) => {
            // console.log("ERR in API");
        });
}

uploadProject();

