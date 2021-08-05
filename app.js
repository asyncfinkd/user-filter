let monthes =
    [
      {
        numeric : "01",
        month : "january",
        letter : "jan",
      },
      {
        numeric : "02",
        month : "february",
        letter : "feb",
      },
      {numeric : "03", month : "march", letter : "mar"}, {
        numeric : "04",
        month : "april",
        letter : "apr",
      },
      {
        numeric : "05",
        month : "may",
        letter : "may",
      },
      {
        numeric : "06",
        month : "june",
        letter : "jun",
      },
      {numeric : "07", month : "july", letter : "jul"},
      {numeric : "08", month : "august", letter : "aug"}, {
        numeric : "09",
        month : "september",
        letter : "sep",
      },
      {
        numeric : "10",
        month : "october",
        letter : "oct",
      },
      {numeric : "11", month : "november", letter : "nov"},
      {numeric : "12", month : "december", letter : "dec"}
    ]

    let data = [{
      type : "object",
      id : "1",
      firstName : "Nika",
      lastName : "Shamiladze",
      date : "06/08/2005",
      friends : [
        {firstName : "qwe", lastName : "qwe", relationship : "friend"},
        {firstName : "qwe12", lastName : "qwe", relationship : "bro"},
        {firstName : "123", lastName : "qwe", relationship : "friend"}
      ],
      activityLog : [
        {date : "08/08/2021", time : "12:08", id : "5"},
        {date : "10/10/2021", time : "14:08", id : "8"}
      ]
    }]

    function
    createFullName(firstName, lastName) { return firstName + " " + lastName; }

if (!data[0].type || +data[0].id < 0) {
  console.log('err');
}
else {
  data.map((item) = > {
    let fullName = createFullName(item.firstName, item.lastName);
    let age = 2021 - item.date.split("/")[2];
    console.log(age);
    console.log(fullName);
    if (item.friends.length > 0) {
      item.friends.map((friend) = > {
        if (friend.relationship.toLowerCase() != = "friend") {
          let notFriends = [];
          let fullName = createFullName(friend.firstName, friend.lastName);
          notFriends.push({
            fullName : fullName,
            firstName : friend.firstName,
            lastName : friend.lastName,
            relationship : friend.relationship
          });
          console.log(notFriends);
        }
      })
    }
    item.activityLog.map((log) = > {
      if (log.id || log.id > 0) {
        let sortedDate = log.date.split("/")[1];
        console.log(sortedDate);
        monthes.map((month) = > {
          if (month.numeric == = sortedDate) {
            const loggedMonth = [];
            loggedMonth.push({
              month : month.month,
              letter : month.letter,
            });
            console.log(loggedMonth);
          }
        })
      }
    })
  })
}
