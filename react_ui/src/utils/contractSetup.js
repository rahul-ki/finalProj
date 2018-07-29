function ContractSetup () {
  let ContractABI = window.web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"idToTask","outputs":[{"name":"ipfsHash","type":"string"},{"name":"childDoing","type":"address"},{"name":"parent","type":"address"},{"name":"completed","type":"bool"},{"name":"verified","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"task_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLatestTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"parentToChildren","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getCorrespondingTask","outputs":[{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":true,"name":"parent","type":"address"}],"name":"TaskCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":true,"name":"childDoing","type":"address"}],"name":"TaskDoing","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":true,"name":"childDoing","type":"address"}],"name":"TaskCompleted","type":"event"},{"constant":false,"inputs":[{"name":"_ipfsHash","type":"string"}],"name":"addTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"child","type":"address"}],"name":"addChildren","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_taskId","type":"uint256"}],"name":"doingATask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"completedATask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"verifyTask","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]);
  let ContractObj = ContractABI.at('0xd8e3e97fce91f6505e034fd4261c39585e3d5fdb');
  return ContractObj
}

const contractInstance = ContractSetup()

export default contractInstance