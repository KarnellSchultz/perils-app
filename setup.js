const chalk = require("chalk");

const { exec } = require("child_process");
exec("yarn install", (err, stdout, stderr) => {
  chalk.blue(console.log("🛰 Starting dev server . . ."));
  if (err) {
    // node couldn't execute the command
    chalk.red(console.error(err));
    return;
  }

  // the *entire* stdout and stderr (buffered)
  chalk.bgMagentaBright(console.log(`stdout: ${stdout}`));
  chalk.bgMagentaBright(console.log(`stderr: ${stderr}`));
});

exec("yarn dev", (err, stdout, stderr) => {
  chalk.blue(console.log("🛰 Starting dev server . . ."));
  if (err) {
    // node couldn't execute the command
    chalk.red(console.error(err));
    return;
  }

  chalk.greenBright("SERVER RUNNING ON . . . ");

  chalk.bgMagentaBright(console.log(`stdout: ${stdout}`));
  chalk.bgMagentaBright(console.log(`stderr: ${stderr}`));
});
