const Ballot = artifacts.require("Ballot");

module.exports = function (deployer) {
  deployer.deploy(Ballot, ["0x9086b277b07117347539a47834A347cec29579AD","0xFBf55685dbBf4DaFa4a30E9E4A43B93364Cb5d82"]);
};
