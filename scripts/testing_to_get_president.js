require("dotenv").config()

const Web3=require("web3")

const HDWalletProvider=require("@truffle/hdwallet-provider")

const mnemonic=process.env.MNEMONIC
const clientURL= "https://rpc-mumbai.maticvigil.com"

const provider=new HDWalletProvider(mnemonic,clientURL)

const web3=new Web3(provider)

const data=require("../build/contracts/GetPresident.json")

const abiArray=data.abi;

const contract_address=process.env.CONTRACT_ADDRESS

const get_president=async()=>{

    const contract=await new web3.eth.Contract(abiArray,contract_address)
    const president =await contract.methods.president().call()
    console.log("The president from the API is", president)
}

get_president()