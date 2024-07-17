const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE codeblocks (
    id INTEGER PRIMARY KEY,
    title TEXT,
    template TEXT,
    solution TEXT
  )`);

    const stmt = db.prepare(`INSERT INTO codeblocks (title, template, solution) VALUES (?, ?, ?)`);
    stmt.run('Async case', 'async function fetchData() {}', 'async function fetchData() { return true; }');
    stmt.run('Sync case', 'function fetchData() {}', 'function fetchData() { return true; }');
    stmt.run('Promise case', 'function fetchData() { return new Promise(); }', 'function fetchData() { return Promise.resolve(true); }');
    stmt.run('Callback case', 'function fetchData(callback) { callback(); }', 'function fetchData(callback) { callback(true); }');
    stmt.finalize();
});

module.exports = db;
