export const fields: any = {
  data: [
    {
      label: 'Ansible Vault password',
      type: 'text',
      path: [
        'vaultPassword'
      ],
      description: 'Ansible Vault password used for encrypting sensitive data.'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'vnfcFlavors',
        '*',
        'name'
      ],
      description: 'N/A'
    },
    {
      label: 'numberOfCpus',
      type: 'number',
      path: [
        'vnfcFlavors',
        '*',
        'numberOfCpus'
      ],
      description: 'number of CPUs'
    },
    {
      label: 'memory',
      type: 'number',
      path: [
        'vnfcFlavors',
        '*',
        'memory'
      ],
      description: 'N/A'
    },
    {
      label: 'memoryReservation',
      type: 'number',
      path: [
        'vnfcFlavors',
        '*',
        'memoryReservation'
      ],
      description: 'N/A'
    },
    {
      label: 'moduleName',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'moduleName'
      ],
      description: 'N/A'
    },
    {
      label: 'image',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'image'
      ],
      description: 'Path to Image (.vmdk)'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'networks',
        '*',
        'name'
      ],
      description: 'N/A'
    },
    {
      label: 'ipv4GatewayAddress',
      type: 'text',
      path: [
        'networks',
        '*',
        'ipv4GatewayAddress'
      ],
      description: 'IPv4 gateway address'
    },
    {
      label: 'ipv4Netmask',
      type: 'text',
      path: [
        'networks',
        '*',
        'ipv4Netmask'
      ],
      description: 'IPv4 netmask'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'networks',
        '*',
        'subnets',
        '*',
        'name'
      ],
      description: 'N/A'
    },
    {
      label: 'ipv4Cidr',
      type: 'text',
      path: [
        'networks',
        '*',
        'subnets',
        '*',
        'ipv4Cidr'
      ],
      description: 'N/A'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'providers',
        '*',
        'name'
      ],
      description: 'Name of the provider, used to map to VNFC groups'
    },
    {
      label: 'esxiHostname',
      type: 'text',
      path: [
        'providers',
        '*',
        'esxiHostname'
      ],
      description: 'vSphere ESXi hostname'
    },
    {
      label: 'esxiUsername',
      type: 'text',
      path: [
        'providers',
        '*',
        'esxiUsername'
      ],
      description: 'vSphere ESXi username'
    },
    {
      label: 'esxiPassword',
      type: 'password',
      path: [
        'providers',
        '*',
        'esxiPassword'
      ],
      description: 'N/A'
    },
    {
      label: 'esxiCpuFrequency',
      type: 'number',
      path: [
        'providers',
        '*',
        'esxiCpuFrequency'
      ],
      description: 'VMWare ESXi CPU frequency'
    },
    {
      label: 'vSphereAllowUnverifiedSSL',
      path: [
        'providers',
        '*',
        'vSphereAllowUnverifiedSSL'
      ],
      description: 'Allow unverified SSL'
    },
    {
      label: 'vSphereHostname',
      type: 'text',
      path: [
        'providers',
        '*',
        'vSphereHostname'
      ],
      description: 'VMWare vSphere hostname'
    },
    {
      label: 'vSphereDatacenter',
      type: 'text',
      path: [
        'providers',
        '*',
        'vSphereDatacenter'
      ],
      description: 'vSphere datacenter name'
    },
    {
      label: 'vSphereResourcePoolId',
      type: 'text',
      path: [
        'providers',
        '*',
        'vSphereResourcePoolId'
      ],
      description: 'vSphere resource pool ID'
    },
    {
      label: 'vSphereDatastore',
      type: 'text',
      path: [
        'providers',
        '*',
        'vSphereDatastore'
      ],
      description: 'vSphere datastore name'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'providers',
        '*',
        'name'
      ],
      description: 'N/A'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'networks',
        0,
        'name'
      ],
      description: 'N/A'
    },
    {
      label: 'ipv4GatewayAddress',
      type: 'text',
      path: [
        'networks',
        0,
        'ipv4GatewayAddress'
      ],
      description: 'IPv4 gateway address'
    },
    {
      label: 'ipv4Netmask',
      type: 'text',
      path: [
        'networks',
        0,
        'ipv4Netmask'
      ],
      description: 'IPv4 netmask'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'networks',
        0,
        'subnets',
        '*',
        'name'
      ],
      description: 'N/A'
    },
    {
      label: 'ipv4Cidr',
      type: 'text',
      path: [
        'networks',
        0,
        'subnets',
        '*',
        'ipv4Cidr'
      ],
      description: 'N/A'
    },
    {
      label: 'switchName',
      type: 'text',
      path: [
        'networks',
        0,
        'switchName'
      ],
      description: 'VMWare switch name'
    },
    {
      label: 'portGroupName',
      type: 'text',
      path: [
        'networks',
        0,
        'portGroupName'
      ],
      description: 'VMWare port group name'
    },
    {
      label: 'portGroupVlanId',
      type: 'number',
      path: [
        'networks',
        0,
        'portGroupVlanId'
      ],
      description: 'N/A'
    },
    {
      label: 'name',
      type: 'text',
      path: [
        'vnfcFlavors',
        0,
        'name'
      ],
      description: 'N/A'
    },
    {
      label: 'numberOfCpus',
      type: 'number',
      path: [
        'vnfcFlavors',
        0,
        'numberOfCpus'
      ],
      description: 'number of CPUs'
    },
    {
      label: 'memory',
      type: 'number',
      path: [
        'vnfcFlavors',
        0,
        'memory'
      ],
      description: 'N/A'
    },
    {
      label: 'memoryReservation',
      type: 'number',
      path: [
        'vnfcFlavors',
        0,
        'memoryReservation'
      ],
      description: 'N/A'
    },
    {
      label: 'moduleName',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'moduleName'
      ],
      description: 'N/A'
    },
    {
      label: 'image',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'image'
      ],
      description: 'Path to Image (.vmdk)'
    },
    {
      label: 'systemName',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'systemName'
      ],
      description: 'N/A'
    },
    {
      label: 'providerName',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'providerName'
      ],
      description: 'N/A'
    },
    {
      label: 'networkIds',
      path: [
        'vnfcGroups',
        '*',
        'networkIds'
      ],
      description: 'N/A'
    },
    {
      label: 'vnfcType',
      type: 'comboBox',
      path: [
        'vnfcGroups',
        '*',
        'vnfcs',
        '*',
        'vnfcType'
      ],
      description: 'N/A',
      options: [
        'as'
      ]
    },
    {
      label: 'asType',
      type: 'comboBox',
      path: [
        'vnfcGroups',
        '*',
        'vnfcs',
        '*',
        'appConfig',
        'asType'
      ],
      description: 'N/A',
      options: [
        'as-edge',
        'mas'
      ]
    },
    {
      label: 'hostIndex',
      type: 'number',
      path: [
        'vnfcGroups',
        '*',
        'vnfcs',
        '*',
        'appConfig',
        'hostIndex'
      ],
      description: 'N/A'
    },
    {
      label: 'ipv4Address',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'vnfcs',
        '*',
        'networkInterfaces',
        0,
        'ipv4Address'
      ],
      description: 'IPv4 address'
    },
    {
      label: 'ipv4Netmask',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'vnfcs',
        '*',
        'networkInterfaces',
        0,
        'ipv4Netmask'
      ],
      description: 'IPv4 netmask'
    },
    {
      label: 'ipv4Gateway',
      type: 'text',
      path: [
        'vnfcGroups',
        '*',
        'vnfcs',
        '*',
        'networkInterfaces',
        0,
        'ipv4Gateway'
      ],
      description: 'IPv4 gateway'
    },
    {
      label: 'asLicenseFile',
      type: 'fileSelector',
      path: [
        'vnfcGroups',
        '*',
        'appConfig',
        'asLicenseFile'
      ],
      description: 'N/A'
    },
    {
      label: 'masLicenseFile',
      type: 'fileSelector',
      path: [
        'vnfcGroups',
        '*',
        'appConfig',
        'masLicenseFile'
      ],
      description: 'N/A'
    }
  ]
};
