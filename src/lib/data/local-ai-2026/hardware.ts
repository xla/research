import type { HardwareTarget } from '../types';

export const hardwareTargets: HardwareTarget[] = [
  {
    id: 'm1-max',
    name: 'MacBook Pro M1 Max',
    os: 'macOS',
    cpu: 'Apple M1 Max',
    gpu: 'Integrated 32-core class Apple GPU',
    memory: '64 GB unified memory',
    storage: 'Internal SSD',
    role: 'Mobile workstation for quantised 7B-34B models and offline research work.'
  },
  {
    id: 'm4-pro-mini',
    name: 'Mac Mini M4 Pro',
    os: 'macOS',
    cpu: '12-core Apple M4 Pro',
    gpu: '16-core Apple GPU',
    memory: '24 GB unified memory',
    storage: '512 GB SSD',
    role: 'Low-power desktop node for small assistants, indexing and background services.'
  },
  {
    id: 'g14-2024',
    name: 'ASUS Zephyrus G14 2024',
    os: 'Linux',
    cpu: 'Ryzen 9 8945HS',
    gpu: 'RTX 4070 Laptop GPU',
    memory: '64 GB system RAM',
    storage: '1 TB SSD',
    role: 'CUDA-capable portable machine for quantised inference and evaluation runs.'
  },
  {
    id: 'threadripper-5090',
    name: 'Desktop workstation',
    os: 'Linux',
    cpu: 'Threadripper Pro 3995WX',
    gpu: 'RTX 5090',
    memory: '512 GB DDR4-3200 ECC registered memory',
    storage: 'NVMe recommended',
    role: 'Primary local lab for large MoE experiments, serving, batch work and agent sandboxes.'
  }
];
