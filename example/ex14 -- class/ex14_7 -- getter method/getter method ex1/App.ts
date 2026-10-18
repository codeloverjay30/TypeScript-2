/// applies to JavaBean although it is TypeScript.

class Device{
    private _deviceType:string;
    private _deviceId:number;

    get deviceType() {
      return this._deviceType
    }
    
    set deviceType(val: string) {
      this._deviceType = val
    }
    
    get deviceId() {
      return this._deviceId
    }
    
    set deviceId(val: number) {
      this._deviceId = val
    }
}