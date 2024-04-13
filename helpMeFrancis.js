const __arguments = process.argv.slice(2);
let fails = 0;

const __styles = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
    fgBlack: '\x1b[30m',
    fgRed: '\x1b[31m',
    fgGreen: '\x1b[32m',
    fgYellow: '\x1b[33m',
    fgBlue: '\x1b[34m',
    fgMagenta: '\x1b[35m',
    fgCyan: '\x1b[36m',
    fgWhite: '\x1b[37m',
    fgGray: '\x1b[90m',
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m',
    bgGray: '\x1b[100m'
};

const __dictionary = [
    {
        keys: ['battery', 'batt', 'charge', 'chrg'],
        action: () => {
            console.log(`You can check the battery status and percentage`);
            console.log(`using the ${__styles.fgRed}acpi${__styles.reset} app which you can download from`);
            console.log(`the apt store`);
            console.log(``);
            console.log(`${__styles.bgYellow}${__styles.fgBlack}$ sudo apt-get install acpi${__styles.reset}`);
        }
    },
    {
        keys: ['clip', 'clipboard'],
        action: () => {
            console.log(`You can check the battery status and percentage`);
            console.log(`You can copy a terminal output to the clipboard`);
            console.log(`using the ${__styles.fgRed}xclip${__styles.reset} command which you`);
            console.log(`can get from the apt store`);
            console.log(``);
            console.log(`${__styles.bgYellow}${__styles.fgBlack}$ sudo apt-get install xclip${__styles.reset}`);
        }
    }
];

const showHelpMenu = () => {
    console.log('helpmenu');
}

const blastMessage = (action) => {
    console.log(`${__styles.bgRed}${__styles.bright} ============== [ HELPME FRANCIS ] ============== ${__styles.reset}`);
    console.log(`${__styles.bgGray}${__styles.bright} the ultimate help tool for tiling window managers${__styles.reset}`);
    console.log(``);
    action();
    console.log(``);
    console.log(`${__styles.bgGray}${__styles.bright}__________________________________________________${__styles.reset}`);
    console.log(`${__styles.bgRed}${__styles.bright}..by FrancisStudios (github.com/francisstudios)...${__styles.reset}`);
}

for (const rule of __dictionary) {
    rule.keys.includes(__arguments[0])
        ? blastMessage(rule.action)
        : fails++;
    if (fails === __dictionary.length || !__arguments[0]) showHelpMenu();
}

