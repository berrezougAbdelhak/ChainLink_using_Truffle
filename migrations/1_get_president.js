const getPresident=artifacts.require("GetPresident")


module.exports=function (deployer) {
    deployer.deploy(getPresident)
}
