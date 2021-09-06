import { UniqID, PortalDescriptor } from './types';
import { Connectable } from '../Connectable';

export class PortalStore<D extends {}> extends Connectable<
  PortalDescriptor<D>[]
> {
  private readonly _portalMap = new Map<UniqID, PortalDescriptor<D>>();

  private _batchMode = false;

  get size() {
    return this._portalMap.size;
  }

  get lastPortal() {
    let lastPortal: PortalDescriptor<D> | undefined;
    for (const portal of this.portals) {
      lastPortal = portal;
    }
    return lastPortal;
  }

  get portals() {
    return this._portalMap.values();
  }

  addOrUpdate(portal: PortalDescriptor<D>) {
    this._portalMap.set(portal.id, portal);

    if (!this._batchMode) this._emitChanges();
  }

  delete(id: UniqID) {
    this._portalMap.delete(id);

    if (!this._batchMode) this._emitChanges();
  }

  clear() {
    this._portalMap.clear();

    if (!this._batchMode) this._emitChanges();
  }

  has(id: UniqID) {
    return this._portalMap.has(id);
  }

  get(id: UniqID) {
    return this._portalMap.get(id);
  }

  batch(handle: (store: PortalStore<D>) => void) {
    this._batchMode = true;

    try {
      handle(this);
    } finally {
      this._batchMode = false;
      this._emitChanges();
    }
  }

  /**
   * just notify portal host rerender view
   */
  forceEmit() {
    this._emitChanges();
  }

  private _emitChanges() {
    this.emit([...this.portals]);
  }
}
