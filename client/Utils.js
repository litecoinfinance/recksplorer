
function FormatCapacity(cap, usdltfn)
{
    var formattedCap = cap.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    if (usdltfn)
    {
        var capusd = cap*usdltfn/Math.pow(10,8);
        var formattedCapusd = capusd.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
        return `${formattedCap} sat (${formattedCapusd} USD)`;
    }
    else
        return `${formattedCap} sat`;
}

// Converts uint8 json array to hex string
function RHashArrayToHexString(rhash)
{
    return rhash.map(function(i) {
        return ('0' + i.toString(16)).slice(-2);
    }).join('');
}

function ParseAxiosError(error)
{
    if (error.response)
        // Server responded
        return error.response.data;
    else
        // Server did not respond
        return error.message;
}

function GetTransactionURL(txid)
{
    return 'https://explorer.ltfn.org/Transaction?txid=' + txid;
}

export {
    FormatCapacity,
    RHashArrayToHexString,
    ParseAxiosError,
    GetTransactionURL
}
