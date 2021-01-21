declare module 'dva-core' {
  interface Instance {
    _models: any[]
    _store: any
    _plugin: any
    use: any
    model: (m: any) => any
    start: (container?: any) => any
    [key: string]: any
  }
  function create(hooksAndOpts?: any, createOpts?: any): Instance
}

interface Window {
  __POWERED_BY_QIANKUN__?: any
}
declare module 'dva-loading' {
  interface IOptions {
    namespace?: string
    only?: any[]
    except?: any[]
  }
  export default function createLoading(opts?: IOptions): any
}
