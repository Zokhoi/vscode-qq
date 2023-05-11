import * as vscode from 'vscode';
import * as oicq from 'oicq-icalingua-plus-plus';

interface ContactId {
    self: number,
    type: "u" | "g",
    uin: number,
}

function genContactId(type: "u" | "g", uin: number): string {
    return client.uin + type + uin;
}

function parseContactId(id: string): ContactId {
    let type: ContactId["type"];
    if (id.includes("u")) {
        type = "u";
    } else {
        type = "g";
    }
    let self = parseInt(id.split(type)[0]);
    let uin = parseInt(id.split(type)[1]);
    return { self, type, uin };
}

function setContext(context: vscode.ExtensionContext) {
    ctx = context;
}

function setClient(c: oicq.Client) {
    client = c;
}

let ctx: vscode.ExtensionContext;
let client: oicq.Client;

const NOOP = () => { };

export { ctx, client, setContext, setClient, NOOP, genContactId, parseContactId };
