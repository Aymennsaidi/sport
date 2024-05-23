export function  generateId(T: any) {
    var max;
    if (T.length == 0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 0; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }
      }
    }
    return max + 1;
  }
  export function deleteObject(tab :any ,key: string, id: number) {
    let pos = tab.findIndex((m: any) => m.id == id);
      tab.splice(pos, 1);
      localStorage.setItem(key, JSON.stringify(tab));
  
  }