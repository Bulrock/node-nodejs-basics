const parseEnv = () => {
    const parsedEnvVariables = [];
    for (let key in process.env) {
        if(key.startsWith('RSS_')) {
            parsedEnvVariables.push(`${key}=${process.env[key]}`)
        }
    }
    console.log(parsedEnvVariables.join('; '));
};

parseEnv();