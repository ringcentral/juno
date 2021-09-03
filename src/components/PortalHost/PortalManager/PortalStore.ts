import { UniqID, PortalDescriptor } from './types';
import { Connectable } from '../Connectable';

export class PortalStore<A extends {}> extends Connectable<
  PortalDescriptor<{}, A>[]
> {
  private readonly _portalMap = new Map<UniqID, PortalDescriptor<{}, A>>();

  get size() {
    return this._portalMap.size;
  }

  get lastPortal() {
    let lastPortal: PortalDescriptor<{}, A> | undefined;
    for (const portal of this.portals()) {
      lastPortal = portal;
    }
    return lastPortal;
  }

  portals() {
    return this._portalMap.values();
  }

  add(portal: PortalDescriptor<{}, A>, emit = true) {
    this._portalMap.set(portal.id, portal);

    if (emit) this._emitChanges();
  }

  delete(id: UniqID, emit = true) {
    this._portalMap.delete(id);

    if (emit) this._emitChanges();
  }

  clear(emit = true) {
    this._portalMap.clear();

    if (emit) this._emitChanges();
  }

  has(id: UniqID) {
    return this._portalMap.has(id);
  }

  get(id: UniqID) {
    return this._portalMap.get(id);
  }

  /**
   * invoke this function after modify the portalDescriptor in store
   *
   * if you want batch store changes (clear, delete, add)
   * you can set emit as false then invoke this function
   */
  manuallyEmit() {
    this._emitChanges();
  }

  private _emitChanges() {
    this.emit([...this.portals()]);
  }
}
