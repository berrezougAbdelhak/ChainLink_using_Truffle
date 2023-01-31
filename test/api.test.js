const assert=require("assert")

const Web3=require("web3")

const web3=new Web3("HTTP://127.0.0.1:7545")

const data =require('../build/contracts/GetPresident.json')
const abiArray=data.abi
const contract_address="0xc41ad6e1ffBB6ab316b5d29841BB80f84CD594Ec"

let accounts;
let getPresident;

beforeEach(async()=>{
    accounts=await web3.eth.getAccounts()
    getPresident=await new web3.eth.Contract(abiArray,contract_address)
})

describe("GetInformation",()=>{

    it("checks the owner ",async()=>{
        let owner=await getPresident.methods.owner().call()
        assert.equal(owner,accounts[0])
    })
    it("checks the president ",async()=>{
        let president=await getPresident.methods.president().call()
        console.debug("president is ",president)
    })
})