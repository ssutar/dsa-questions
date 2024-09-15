class TrieNode {
  constructor() {
    this.children = [];
    this.isFile = false;
    this.childCount = 0;
    this.visitCount = 0;
  }

  insert(paths) {
    if (!paths.length) {
      this.isFile = true;
      return;
    }
    const pathNode = this.children[paths[0]] || new TrieNode();
    pathNode.insert(paths.slice(1));
    this.children[paths[0]] = pathNode;
    this.childCount = Object.keys(this.children).length;
  }

  visit(paths) {
    if (!paths.length) {
      return;
    }
    const pathNode = this.children[paths[0]];
    if (!pathNode) {
      return;
    }
    pathNode.visit(paths.slice(1));
    this.visitCount += 1;
  }

  print(paths) {
    let node = this;
    let result = [];
    // console.log(paths);
    for (let path of paths) {
      node = node.children[path];
      if (node.childCount === node.visitCount || node.isFile) {
        result.push(path);
        return result.join('/');
      }
      result.push(path);
    }
  }
}

function fileList() {
  const list1 = [
    'a/b.txt',
    'b/c.txt',
    'b/d.txt',
    'c/e.txt',
    'c/f/a.txt',
    'c/f/b.txt',
    'c/g.txt',
    'd/a/b.txt',
  ];

  const list2 = ['b/c.txt', 'b/d.txt', 'c/e.txt', 'c/f/b.txt', 'd/a/b.txt'];

  const root = new TrieNode();
  for (let filepath of list1) {
    root.insert(filepath.split('/'));
  }
  // console.log(root);
  for (let filepath of list2) {
    root.visit(filepath.split('/'));
  }

  // console.log(root);

  // let fileList = [root.children];

  // for (let children of fileList) {
  //   for (let child of children) {
  //     if (child.childCount === child.visitCount) {
  //       console.log(child);
  //     }
  //   }
  // }
  const result = new Set();
  for (let filepath of list2) {
    result.add(root.print(filepath.split('/')));
  }
  console.log([...result]);
  return [...result];
}

fileList();
