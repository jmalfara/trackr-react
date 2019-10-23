import "firebase/firestore"

export const checkAgentAvailability = ({ firebase }) => {
  return firebase.firestore().collection("config").doc("agents").get()
}

export const sendTransactionRequest = ({ firebase }, data) => {
  return firebase.firestore().collection("transactionRequests").add(data)
}
