// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import data from '../../../public/contract.json'
const contractaddressis = data.contract;
// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Hello PEPENATS! Below are the available commands
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Pepenator: The Ultimate Fusion of Pepe and Terminator`;
};
export const website = async (args: string[]): Promise<string> => {
  window.open(`https://website.pepenator.net`);
  return `Opening website`;
};

export const tg = async (args: string[]): Promise<string> => {
  window.open(`https://t.me/pepenator_eth`);

  return 'Opening Telegram...';
};

export const x = async (args: string[]): Promise<string> => {
  window.open(`x.com/pepenator_eth`);

  return 'Opening Twitter...';
};

export const ca = async (args: string[]): Promise<string> => {
  return contractaddressis;
};

// Contact
// export const email = async (args: string[]): Promise<string> => {
//   // window.open(`mailto:${config.email}`);
//   return `Mail : ${config.email}`;
// };

export const claimairdrop = async (args: string[]): Promise<string> => {
  window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
  return `Claiming`;
};



export const contract = async (args: string[]): Promise<string> => {
  return `Contract Address is ${contractaddressis} `;
};


// export const stats = async (args: string[]): Promise<string> => {
//   const apiUrl = 'https://api.example.com/data';
//   fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const result = response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
  
//   return `Contract Address is  0x0000000000000000000000 `;
// };
export const stats = async (args: string[]): Promise<string> => {
  const apiUrl = `https://api.dexscreener.com/latest/dex/tokens/${contractaddressis}`;
  console.log(apiUrl)
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    const pairs = responseData.pairs;

    // Extracting fdv values from each pair
    const fdvValues = pairs.map(pair => pair.fdv);

    // Formatting fdv values as a string
    const fdvString = fdvValues[0];
    const volvalues = pairs.map(pair => pair.volume);

    // Formatting fdv values as a string
    const Volume = volvalues[0]['h24'];
    // console.log(data);
    return `Stats
    MarketCap: $${JSON.stringify(fdvString)}
    Volume: $${JSON.stringify(Volume)}
    `;
  } catch (error) {
    console.error('Error:', error);
    return `No Token stats available`;
  }
};



export const etherscan = async (args: string[]): Promise<string> => {
  window.open(`https://etherscan.io/token/${contractaddressis}`);
  return `Opening etherscan... `;
};

// Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username} Babbage`;
// };

// export const date = async (args: string[]): Promise<string> => {
//   return `Today's Date is: ${new Date().toString()}`;
// };

// export const age = async (args: string[]): Promise<string> => {
//   const september1964 = new Date('1964-09-01');
//   const currentDate = new Date();

//   const timeDifference = currentDate.getTime() - september1964.getTime();
//   const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   return `My age is ${daysDifference} days.`;
// };
// ██████╗██████╗  ██████╗         ██████╗  ██████╗  ██████╗  ██████╗ 
// ██╔════╝██╔══██╗██╔════╝        ██╔════╝ ██╔════╝ ██╔═████╗██╔═████╗
// ██║     ██║  ██║██║       █████╗███████╗ ███████╗ ██║██╔██║██║██╔██║
// ██║     ██║  ██║██║       ╚════╝██╔═══██╗██╔═══██╗████╔╝██║████╔╝██║
// ╚██████╗██████╔╝╚██████╗        ╚██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝
//  ╚═════╝╚═════╝  ╚═════╝         ╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝ 
// Banner
export const home = (args?: string[]): string => {
  return `  
░█▀█░█▀▀░█▀█░█▀▀░█▀█░█▀█░▀█▀░█▀█░█▀▄
░█▀▀░█▀▀░█▀▀░█▀▀░█░█░█▀█░░█░░█░█░█▀▄
░▀░░░▀▀▀░▀░░░▀▀▀░▀░▀░▀░▀░░▀░░▀▀▀░▀░▀                   
Contract : ${contractaddressis}
Telegram : https://t.me/pepenator_eth

Type 'help' to see the list of available commands.
`;
};
