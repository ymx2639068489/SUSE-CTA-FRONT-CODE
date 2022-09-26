import NodeRSA from 'jsencrypt';

export function encrypt(data, pubkey) {
    return new NodeRSA(pubkey, 'pkcs8-public').encrypt(data, 'base64');
}