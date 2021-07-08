//CRUD interface defines RESTFUL methods to be implemented by a resource
export interface CRUD {
  create: (resource:any) => Promise<any>
}