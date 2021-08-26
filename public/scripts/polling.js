//TEMPORARILY GETTING POLL INFO IN HERE
$.get("/polls").then((days) => {
  console.log(days.start_date.split('T')[0]);
});
//TEMPORARY CODE BLOCK
