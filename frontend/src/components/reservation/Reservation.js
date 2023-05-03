// async handelSubmit(value){
//     var id=await AsyncStorage.getItem('id')
//     const {nom,mobile,checkoutData,selectedDate,selectedTime,isShow,mail}=this.state
//     var time=selectedTime.split(" ")
//    var mytime=time[4]
//     await axios.post("http://192.168.2.130:3090/api/postReservation",
//      {
//       user_id:id,
//       userName:nom,
//       userMail:mail,
//       userPhone:mobile,
//       packName:"test",
//       serviceName:checkoutData.selectedCardNames,
//       totalPrice:checkoutData.totalPrice +" $",
//       date:selectedDate.slice(0,16),
//       hour:mytime,
//       payment:value,
//   })

//     .then((res)=>{
//       if(res.data==="reservation has been registered"){
//         axios.post("http://192.168.2.130:3090/api/sendMail/%22+id)
//         .then((res)=>{
//           if(res.data.status==="success"){
//             Alert.alert(
//               'BIBIO',
//               'Réservation enregistrée. Vous recevez un mail de confirmaiton',

//               [
//                 { text: 'OK', onPress: ()=>this.props.navigation.navigate('Profile') },
//               ],
//               { cancelable: false }
//             );
//           }})


//       }


//     })