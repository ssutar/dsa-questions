/**
 * You have a backend system that stores all versions of a JSON object. You need to reduce the amount of data stored, how would you design the API.
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.versions = {};
  }
}

class JsonTrie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(obj, version, node = this.root) {
    let current = node;

    for (let [key, value] of Object.entries(obj)) {
      // console.log(key, value);
      if (current.children[key] === undefined) {
        current.children[key] = new TrieNode();
      }
      current = current.children[key];

      if (Array.isArray(value)) {
        // handle
      } else if (typeof value === 'object') {
        this.insert(value, version, node);
      } else {
        current.isEnd = true;
        current.versions[version] = value;
      }
    }
  }

  read(version, node = this.root) {
    let result = {};
    function traverse(node, result) {
      if (!node) {
        return;
      }
      for (let [key, child] of Object.entries(node.children)) {
        result[key] = {};
        if (child.isEnd) {
          result[key] = child.versions[version];
        }
        traverse(child, result[key]);
      }
    }
    traverse(node, result);
    return result;
  }
}

function jsonSerialize() {
  let dataV1 = {
    name: 'Alice',
    address: { street: '123 Main St', city: 'New York' },
  };
  let dataV2 = {
    name: 'Bob',
    address: { street: '124 Main St' },
  };

  const t = new JsonTrie();
  t.insert(dataV1, 1);
  t.insert(dataV2, 2);
  console.log(t.root.children);
  console.log(t.read(1));
  console.log(t.read(2));
}

jsonSerialize();
