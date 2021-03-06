// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as os from 'os';
import * as path from 'path';
import { ExtensionContext, extensions } from 'vscode';
import { IOZAsset } from './services/openZeppelin/models';

const extensionId = 'AzBlockchain.azure-blockchain';
const packageJSON = extensions.getExtension(extensionId)!.packageJSON;

export enum RequiredApps {
  node = 'node',
  npm = 'npm',
  git = 'git',
  python = 'python',
  truffle = 'truffle',
  ganache = 'ganache-cli',
  hdwalletProvider = 'truffle-hdwallet-provider',
}

export enum NotificationOptions {
  error = 'error',
  info = 'info',
  warning = 'warning',
}

export class Constants {
  public static extensionContext: ExtensionContext;
  public static temporaryDirectory = '';
  public static extensionName = packageJSON.name;
  public static extensionVersion = packageJSON.version;
  public static extensionKey = packageJSON.aiKey;

  public static outputChannel = {
    azureBlockchain: 'Azure Blockchain',
    azureBlockchainServiceClient: 'Azure Blockchain Service Client',
    executeCommand: 'Execute command',
    ganacheCommands: 'Ganache Server',
    logicAppGenerator: 'Logic App Generator',
    requirements: 'Requirements',
    telemetryClient: 'Telemetry Client',
    treeManager: 'Service Tree Manager',
  };

  public static truffleConfigRequireNames = {
    fs: 'fs',
    fsPackageName: 'fs',
    hdwalletProvider: 'HDWalletProvider',
  };

  public static truffleConfigDefaultDirectory = {
    contracts_build_directory: path.join('./', 'build', 'contracts'),
    contracts_directory: path.join('./', 'contracts'),
    migrations_directory: path.join('./', 'migrations'),
  };

  public static defaultTruffleBox = 'Azure-Samples/Blockchain-Ethereum-Template';
  public static defaultDebounceTimeout = 300;

  public static infuraHost = 'infura.io';
  public static localhost = '127.0.0.1';
  public static localhostName = 'development';
  public static defaultLocalhostPort = 8545;
  public static defaultABSPort = 3200;
  public static defaultABSHost = 'blockchain.azure.com';

  public static ganacheRetryTimeout = 2000; // milliseconds
  public static ganacheRetryAttempts = 5;

  public static minPasswordLength = 12;
  public static maxPasswordLength = 72;
  public static minResourceGroupLength = 1;
  public static maxResourceGroupLength = 90;
  public static minConsortiumAndMemberLength = 2;
  public static maxConsortiumAndMemberLength = 20;

  public static requiredVersions: { [key: string]: string | { min: string, max: string } } = {
    [RequiredApps.ganache]: {
      max: '7.0.0',
      min: '6.0.0',
    },
    [RequiredApps.git]: '2.10.0',
    [RequiredApps.hdwalletProvider]: {
      max: '2.0.0',
      min: '1.0.17',
    },
    [RequiredApps.node]: '10.15.0',
    [RequiredApps.npm]: '6.4.1',
    [RequiredApps.python]: {
      max: '3.0.0',
      min: '2.7.15',
    },
    [RequiredApps.truffle]: {
      max: '6.0.0',
      min: '5.0.0',
    },
  };

  public static telemetryEvents = {
    extensionActivated: 'Extension.Activated',
    failedToCheckRequiredApps: 'Requirements.FailedToCheckRequiredApps',
    webPages: {
      action: 'WebPages.action',
      disposeWebPage: 'WebPages.DisposeWebPage',
      showWebPage: 'WebPages.ShowWebPage',
    },
  };

  public static globalStateKeys = {
    infuraCredentialsCacheKey: 'InfuraCache',
    infuraExcludedProjectsListKey: 'InfuraExcludedProjects',
    mnemonicStorageKey: 'mnemonicStorage',
    serviceResourceKey: 'treeContent',
  };

  public static infuraFileResponse = {
    css: '',
    path: '',
  };

  public static webViewPages = {
    contractUI: {
      path: '',
      showOnStartup: 'showOnStartupContractUI',
      title: 'Smart Contract UI',
      viewType: 'contractUIPage',
    },
    generateToken: {
      path: '',
      showOnStartup: 'showOnStartupGenerateToken',
      title: 'Generate Token',
      viewType: 'generateTokenPage',
    },
    requirements: {
      path: '',
      showOnStartup: 'showOnStartupRequirementsPage',
      title: 'Azure Blockchain Development Kit - Preview',
      viewType: 'requirementsPage',
    },
    welcome: {
      path: '',
      showOnStartup: 'showOnStartupWelcomePage',
      title: 'Welcome to Azure Blockchain',
      viewType: 'welcomePage',
    },
  };

  public static contractExtension = {
    json: '.json',
    sol: '.sol',
  };

  public static networkProtocols = {
    file: 'file://',
    ftp: 'ftp://',
    http: 'http://',
    https: 'https://',
  };

  public static contractProperties = {
    abi: 'abi',
    bytecode: 'bytecode',
    deployedBytecode: 'deployedBytecode',
  };

  public static propertyLabels = {
    gasLimit: 'gas limit',
    gasPrice: 'gas price',
  };

  public static confirmationDialogResult = {
    no: 'No',
    yes: 'Yes',
  };

  public static mnemonicConstants = {
    fileExt: 'env',
  };

  public static defaultContractSettings = {
    gasLimit: 4712388,
    gasPrice: 100000000000,
  };

  public static paletteLabels = {
    enterConsortiumManagementPassword: 'Enter consortium management password',
    enterConsortiumName: 'Enter consortium name',
    enterInfuraProjectName: 'Enter project name',
    enterLocalProjectName: 'Enter local project name',
    enterLocalProjectPort: 'Enter local port number',
    enterMemberName: 'Enter member name',
    enterMemberPassword: 'Enter member password',
    enterTruffleBoxName: 'Enter pre-built Truffle project',
    enterUserEmail: 'Enter user email address',
    enterUserName: 'Enter user name',
    enterUserPassword: 'Enter user password',
    provideResourceGroupName: 'Provide a resource group name',
    selectConsortiumProtocol: 'Select protocol',
    selectConsortiumRegion: 'Select region',
    selectConsortiumSku: 'Select SKU',
    selectResourceGroup: 'Select resource group',
    valueOrDefault: Constants.getMessageValueOrDefault,
  };

  public static treeItemData = {
    group: {
      azure: {
        member: {
          contextValue: 'member',
          iconPath: { dark: '', light: '' },
        },
      },
      bdm: {
        input: {
          contextValue: 'inputGroup',
          iconPath: { dark: '', light: '' },
          label: 'Inputs',
        },
        output: {
          contextValue: 'outputGroup',
          iconPath: { dark: '', light: '' },
          label: 'Outputs',
        },
      },
    },
    network: {
      azure: {
        contextValue: 'network',
        iconPath: { dark: '', light: '' },
      },
      bdm: {
        application: {
          contextValue: 'bdmApplication',
          iconPath: { dark: '', light: '' },
        },
        input: {
          contextValue: 'input',
          iconPath: { dark: '', light: '' },
        },
        output: {
          contextValue: 'output',
          iconPath: { dark: '', light: '' },
        },
      },
      default: {
        contextValue: 'network',
        iconPath: { dark: '', light: '' },
      },
      infura: {
        contextValue: 'network',
        iconPath: { dark: '', light: '' },
      },
      local: {
        contextValue: 'localnetwork',
        iconPath: { dark: '', light: '' },
      },
    },
    project: {
      azure: {
        contextValue: 'project',
        iconPath: { dark: '', light: '' },
      },
      bdm: {
        contextValue: 'project',
        iconPath: { dark: '', light: '' },
      },
      default: {
        contextValue: 'project',
        iconPath: { dark: '', light: '' },
      },
      infura: {
        contextValue: 'project',
        iconPath: { dark: '', light: '' },
      },
      local: {
        contextValue: 'localproject',
        iconPath: { dark: '', light: '' },
      },
    },
    service: {
      azure: {
        contextValue: 'service',
        iconPath: { dark: '', light: '' },
        label: 'Azure Blockchain Service',
        prefix: 'abs',
      },
      bdm: {
        contextValue: 'service',
        iconPath: { dark: '', light: '' },
        label: 'Blockchain Data Manager',
        prefix: 'bdm',
      },
      default: {
        contextValue: 'service',
        iconPath: { dark: '', light: '' },
        label: 'Default Service',
      },
      infura: {
        contextValue: 'service',
        iconPath: { dark: '', light: '' },
        label: 'Infura Service',
        prefix: 'inf',
      },
      local: {
        contextValue: 'service',
        iconPath: { dark: '', light: '' },
        label: 'Local Service',
        prefix: 'loc',
      },
    },
  };

  public static validationRegexps = {
    array: /^\[.*\]$/g,
    forbiddenChars: {
      dotAtTheEnd: /^(?=.*[.]$).*$/g,
      networkName: /[^0-9a-z]/g,
      password: /[#`*"'\-%;,]/g,
      resourceGroupName: /[#`*"'%;,!@$^&+=?\/<>|[\]{}:\\~]/g,
    },
    hasDigits: /(?=.*\d)/g,
    infuraProjectname: /^([a-zA-Z]|\d|\s|[-_:]){3,}$/g,
    isJsonFile: new RegExp(Constants.contractExtension.json + '$'),
    isLowerCase: /^[a-z0-9_\-!@$^&()+=?\/<>|[\]{}:.\\~ #`*"'%;,]+$/g,
    isUrl: /^(?:http(s)?:\/\/)?[\w:@.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/igm,
    lowerCaseLetter: /(?=.*[a-z]).*/g,
    moduleExportsTemplate: /{(.*)}$/g,
    onlyNumber: /^(-\d+|\d+)$/g,
    // tslint:disable-next-line: max-line-length
    port: /^([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/,
    specialChars: {
      consortiumMemberName: /^(?=^[a-z])[a-z0-9]+$/g,
      password: /[!@$^&()+=?\/<>|[\]{}_:.\\~]/g,
      resourceGroupName: /[-\w.()]/g,
    },
    types: {
      simpleArray: /\w+\[\]/g,
      simpleMapping: /^\[.+\]$/g,
      solidityAddress: /^(0x)[a-zA-Z0-9]{40}$/g,
      solidityInt: /^int\d+$/g,
      solidityInteger: /u*int\d*/g,
      solidityUint: /^uint\d+$/g,
    },
    upperCaseLetter: /(?=.*[A-Z]).*/g,
  };

  public static responseReason = {
    alreadyExists: 'AlreadyExists',
  };

  public static validationMessages = {
    arrayElementsShouldBeValid: (elementsType: string) => {
      return `Array elements should have valid value of type ${elementsType}`;
    },
    forbiddenChars: {
      dotAtTheEnd: "Input value must not have '.' at the end.",
      networkName: 'Invalid name. Name can contain only lowercase letters and numbers.',
      password: "'#', '`', '*', '\"', ''', '-', '%', ',', ';'",
      // tslint:disable-next-line: max-line-length
      resourceGroupName: "'#', '`', '*', '\"', ''', '\%', ';', ',', '!', '@', '$', '^', '&', '+', '=', '?', '\/', '<', '>', '|', '[', '\]', '{', '}', ':', '\\', '~'",
    },
    forbiddenSymbols: 'Provided name has forbidden symbols.',
    infuraProjectInvalidName: 'Project name must be at least 3 characters and should have alphanumeric, space, and the symbols "-", "_", ":".',
    invalidAzureName: 'Invalid name. Name can contain only lowercase letters and numbers. ' +
      `The first character must be a letter. Length must be between ${Constants.minConsortiumAndMemberLength} ` +
      `and ${Constants.maxConsortiumAndMemberLength} characters.`,
    invalidConfirmationResult: '\'yes\' or \'no\'',
    invalidHostAddress: 'Invalid host address',
    invalidPort: 'Invalid port.',
    invalidResourceGroupName: 'Resource group names only allow alphanumeric characters, periods,' +
      'underscores, hyphens and parenthesis and cannot end in a period. ' +
      `Length must be between ${Constants.minResourceGroupLength} and ${Constants.maxResourceGroupLength} characters.`,
    lengthRange: Constants.getMessageLengthRange,
    nameAlreadyInUse: 'This name is already in use. Choose another one.',
    noDigits: 'Password should have at least one digit.',
    noLowerCaseLetter: 'Password should have at least one lowercase letter from a to z.',
    noSpecialChars: 'Password must have 1 special character.',
    noUpperCaseLetter: 'Password should have at least one uppercase letter from A to Z.',
    onlyLowerCaseAllowed: 'Only lower case allowed.',
    onlyNumberAllowed: 'Value after \':\' should be a number.',
    openZeppelinFilesAreInvalid: Constants.getMessageOpenZeppelinFilesAreInvalid,
    portAlreadyInUse: 'This port is already in use. Choose another one.',
    portNotInUseGanache: 'No local service running on port. Please start service or select another port.',
    projectAlreadyExists: 'Network already exists.',
    projectAlreadyExistsOnInfura: 'Project already exist with the same name on Infura.',
    projectIdAlreadyExists: 'Network with project ID already exists.',
    resourceGroupAlreadyExists: Constants.getMessageResourceGroupAlreadyExist,
    unresolvedSymbols: Constants.getMessageInputHasUnresolvedSymbols,
    valueCanSafelyStoreUpToBits: (pow: string) => {
      return `Value can only safely store up to ${pow} bits`;
    },
    valueCannotBeEmpty: 'Value cannot be empty.',
    valueShouldBeArray: 'Value should be the array and enclosed in \[ \]',
    valueShouldBeBool: 'Value should be true or false.',
    valueShouldBeNumber: 'Value should be a number.',
    valueShouldBeNumberOrEmpty: 'Value should be a number or empty.',
    valueShouldBePositiveAndCanSafelyStoreUpToBits: (pow: string) => {
      return `Value should be positive and can only safely store up to ${pow} bits`;
    },
    valueShouldBeSolidityAddress: 'Value should be the correct solidity address.',
  };

  public static placeholders = {
    confirmDialog: 'Are your sure?',
    confirmPaidOperation: 'This operation will cost Ether, type \'yes\' to continue',
    emptyLineText: '<empty line>',
    generateMnemonic: 'Generate mnemonic',
    pasteMnemonic: 'Paste mnemonic',
    resourceGroupName: 'Resource Group Name',
    selectBlockchainDataManagerInstance: 'Select Blockchain Data Manager instance',
    selectConsortium: 'Select consortium',
    selectDeployDestination: 'Select deploy destination',
    selectDestination: 'Select destination',
    selectGanacheServer: 'Select Ganache server',
    selectInfuraProject: 'Select Infura project',
    selectInfuraProjectAvailability: 'Select Infura project availability',
    selectMnemonicExtractKey: 'Select mnemonic to extract key',
    selectMnemonicStorage: 'Select mnemonic storage',
    selectNewProjectPath: 'Select new project path',
    selectProjects: 'Select Projects',
    selectResourceGroup: 'Select a resource group',
    selectRgLocation: 'Select a location to create your Resource Group in...',
    selectSubscription: 'Select subscription',
    selectTypeOfSolidityProject: 'Select type of solidity project',
    setupMnemonic: 'Setup mnemonic',
  };

  // More information see here
  // https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
  public static infuraEndpointsIds: { [key: string]: number } = {
    goerli: 5,
    kovan: 42,
    mainnet: 1,
    rinkeby: 4,
    ropsten: 3,
  };

  public static projectAvailability = {
    private: 'Private',
    public: 'Public',
  };

  public static consortiumMemberStatuses = {
    ready: 'Ready',
  };

  public static executeCommandMessage = {
    failedToRunCommand: (command: string) => `Failed to run command - ${command}. More details in output`,
    failedToRunScript: (scriptPath: string) => `Failed to run script - ${scriptPath}. More details in output`,
    finishRunningCommand: 'Finished running command',
    forkingModule: 'Forking script',
    runningCommand: 'Running command',
  };

  public static typeOfSolidityProject = {
    action: {
      emptyProject: 'createEmptyProject',
      projectFromTruffleBox: 'createProjectFromTruffleBox',
    },
    text: {
      emptyProject: 'Create basic project',
      projectFromTruffleBox: 'Create Project from Truffle box',
    },
  };

  public static statusBarMessages = {
    buildingContracts: 'Building contracts',
    checkingRequirementDependencies: 'Checking requirement dependencies version',
    creatingConsortium: 'Creating new consortium',
    creatingProject: 'Creating new project',
    deployingContracts: (destination: string) => {
      return `Deploying contracts to '${destination}'`;
    },
    generatingLogicApp: (appName: string) => `Generating ${appName}!`,
  };

  public static rpcMethods = {
    getCode: 'eth_getCode',
    netListening: 'net_listening',
    netVersion: 'net_version',
  };

  public static ganacheCommandStrings = {
    cannotStartServer: 'Cannot start ganache server',
    ganachePortIsBusy: 'Cannot start ganache server, port is busy',
    invalidGanachePort: 'Cannot start Ganache server. Invalid port',
    serverAlreadyRunning: 'Ganache server already running',
    serverCanNotRunWithoutGanache: 'To start a local server, installed ganache-cli is required',
    serverCanNotStop: 'Ganache stop server was failed because is not ganache application',
    serverNoGanacheAvailable: 'No Ganache network settings available',
    serverNoGanacheInstance: 'No Ganache instance running',
    serverSuccessfullyStarted: 'Ganache server successfully started',
    serverSuccessfullyStopped: 'Ganache server successfully stopped',
  };

  public static uiCommandStrings = {
    createInfuraProject: '$(plus) Create Infura Project',
    createProject: '$(plus) Create a new network',
    deployToConsortium: 'Deploy to consortium',
  };

  public static errorMessageStrings = {
    // TODO names to lower case
    ActionAborted: 'Action aborted',
    AstIsEmpty: 'enums could not be extracted, current AST is empty',
    BuildContractsBeforeGenerating: 'Please build contracts before generating',
    BuildContractsDirIsEmpty: Constants.getMessageContractsBuildDirectoryIsEmpty,
    BuildContractsDirDoesNotExist: Constants.getMessageContractsBuildDirectoryDoesNotExist,
    CompiledContractIsMissing: 'Compiled contract is missing for solidity file.',
    DirectoryIsNotEmpty: 'Directory is not empty. Open another one?',
    ErrorWhileExecutingCommand: 'Error while executing command: ',
    FetchingDeployedBytecodeIsFailed: 'An error occurred while fetching bytecode from network',
    GetMessageChildAlreadyConnected: Constants.getMessageChildAlreadyConnected,
    GitIsNotInstalled: 'Git is not installed',
    InfuraUnauthorized: 'Unauthorized: please sign in with Infura account.',
    InvalidContract: 'This file is not a valid contract.',
    InvalidMnemonic: 'Invalid mnemonic',
    LoadServiceTreeFailed: 'Load service tree has failed.',
    MnemonicFileHaveNoText: 'Mnemonic file have no text',
    NetworkAlreadyExist: Constants.getMessageNetworkAlreadyExist,
    NetworkNotFound: Constants.getMessageNetworkNotFound,
    NewProjectCreationFailed: 'Command createProject has failed.',
    NoContractBody: 'No contract body in AST',
    NoSubscriptionFound: 'No subscription found.',
    NoSubscriptionFoundClick: 'No subscription found, click an Azure account ' +
      'at the bottom left corner and choose Select All',
    PleaseRenameOldStyleTruffleConfig: 'Please rename file "truffle.js" to "truffle-config.js"',
    RequiredAppsAreNotInstalled: 'To run command you should install required apps',
    ThereAreNoMnemonics: 'There are no mnemonics',
    TruffleConfigHasIncorrectFormat: '"truffle-config.js" has incorrect format',
    TruffleConfigIsNotExist: 'Truffle configuration file not found',
    VariableShouldBeDefined: Constants.getMessageVariableShouldBeDefined,
    WaitForLogin: 'You should sign-in on Azure Portal',
    WorkflowTypeDoesNotMatch: 'workflowType does not match any available workflows',
    WorkspaceShouldBeOpened: 'Workspace should be opened',
  };

  public static informationMessage = {
    absItemNotReady: 'Azure Blockchain Service item is not ready yet. Please wait.',
    cancelButton: 'Cancel',
    consortiumDoesNotHaveMemberWithUrl: 'Consortium does not have member with url',
    consortiumNameValidating: 'Consortium name validating...',
    contractNotDeployed: 'Contract not deployed yet.',
    deployButton: 'Deploy',
    deployFailed: 'Deploy failed',
    deploySucceeded: 'Deploy succeeded',
    detailsButton: 'Details',
    generatedLogicApp: (appName: string) => `Generated the ${appName}!`,
    infuraAccountSuccessfullyCreated: 'Your Infura account successfully created. Please check you email for complete registration',
    infuraSignInPrompt: 'Not signed in to Infura account, sign in first.',
    installButton: 'Install',
    invalidRequiredVersion: 'Required app is not installed or has an old version.',
    memberNameValidating: 'Member name validating...',
    newProjectCreationFinished: 'New project was created successfully',
    newProjectCreationStarted: 'New project creation is started',
    openButton: 'Open',
    privateKeyWasCopiedToClipboard: 'Private key was copied to clipboard',
    requiresDependency: 'This project deployment requires the truffle-hdwallet-provider.',
    rpcEndpointCopiedToClipboard: 'RPCEndpointAddress copied to clipboard',
    seeDetailsRequirementsPage: 'Please see details on the Requirements Page',
    signInButton: 'Sign In',
    transactionBytecodeWasCopiedToClipboard: 'Transaction Bytecode was copied to clipboard',
  };

  public static infuraCredentials = {
    clientId: 'vs-code',
    clientSecret: 'pRo64S3izL72crOsuZ9PatRad0og5dlB',
    scopes: {
      offline: 'offline',
      projectRead: 'projects.read',
      projectWrite: 'projects.write',
      userRead: 'user.read',
    },
  };

  public static infuraAuthUrls = {
    authURL: 'oauth2/auth',
    baseURL: 'https://oauth.infura.io/',
    callbackURL: 'http://127.0.0.1:9010/callback',
    revoke: 'oauth2/revoke',
    tokenURL: 'oauth2/token',
  };

  public static infuraAPIUrls = {
    projects: 'eth/projects',
    rootURL: 'https://system.infura.io/',
    userMe: 'user/me',
  };

  public static infuraSigningIn = 'Signing in';

  public static infuraRequestGrantType = {
    authorizationCode: 'authorization_code',
    refreshToken: 'refresh_token',
  };

  public static microservicesWorkflows = {
    Data: 'Data',
    Messaging: 'Messaging',
    Reporting: 'Reporting',
    Service: 'Service',
  };

  public static azureApps = {
    AzureFunction: { label: 'Azure Function', serviceType: 2, outputDir: 'generatedAzureFunction' },
    FlowApp: { label: 'Flow App', serviceType: 0, outputDir: 'generatedFlowApp' },
    LogicApp: { label: 'Logic App', serviceType: 1, outputDir: 'generatedLogicApp' },
  };

  public static azureApiVersions = {
    preview20180601: '2018-06-01-preview',
    preview20190601: '2019-06-01-preview',
  };

  public static azureResourceExplorer = {
    contentType: 'application/json',
    portalBasUri: 'https://ms.portal.azure.com/#@microsoft.onmicrosoft.com',
    portalBladeUri: 'https://ms.portal.azure.com/#blade/ManagedLedgerExtension/TransactionNodeMenuBlade',
    providerName: 'Microsoft.Blockchain',
    requestAcceptLanguage: 'en-US',
    requestBaseUri: 'https://management.azure.com',
    resourceType: 'blockchainMembers',
  };

  public static solidityTypes = {
    address: 'address',
    bool: 'bool',
    int: 'int',
    string: 'string',
    uint: 'uint',
  };

  public static firstOZVersion = '2.3.0';
  public static allOpenZeppelinVersions = ['2.3.0', '2.4.0'];
  public static ozVersionUserSettingsKey = 'azureBlockchainService.openZeppelin.version';

  public static openZeppelin = {
    cancelButtonTitle: 'Cancel',
    contractsUpgradeIsFailed: 'Upgrade of OpenZeppelin contracts has failed',
    contactParameterInformation(contractName: string, parameterName: string, parameterType: string) {
      return `Contract: ${contractName}. Parameter: ${parameterName}: ${parameterType}`;
    },
    descriptionDownloadingFailed: 'Description downloading failed',
    downloadingContractsFromOpenZeppelin: 'Downloading contracts from OpenZeppelin',
    exploreDownloadedContractsInfo: 'Explore more information about the contracts downloaded',
    invalidVersionException: 'Invalid version. All OpenZeppelin work will be stopped',
    moreDetailsButtonTitle: 'More details',
    newVersionAvailable: 'There is a new version of your OpenZeppelin contracts available. Would you like to download the latest version?',
    overwriteExistedContracts: 'Overwrite existed contracts',
    projectFileName: 'project.json',
    replaceButtonTitle: 'Replace',
    retryButtonTitle: 'Retry',
    retryDownloading: 'Retry downloading',
    saveSpecifiedParameters: 'Not all contract parameters were defined. Do you want to save the progress?',
    selectCategoryForDownloading: 'Select category for downloading',
    skipButtonTitle: 'Skip files',
    specifyContractParameters: 'Some contracts have parameters required for deploy. Do you want to specify them?',
    upgradeOpenZeppelin: 'Upgrading OpenZeppelin',
    hashCalculationFailed(errorMessage: string): string {
      return `Error while calculating file hash. Message: ${errorMessage}`;
    },
    wereNotDownloaded(count: number): string {
      return `OpenZeppelin: Some files (${count}) were not downloaded`;
    },
    wereDownloaded(count: number): string {
      return `OpenZeppelin: (${count}) files were stored`;
    },
    alreadyExisted(existing: IOZAsset[]): string {
      return `OpenZeppelin: (${existing.length}) files already exist on disk: `
        + existing.slice(0, 3).map((contract) => contract.name).join(' ')
        + (existing.length > 3 ? '...' : '');
    },
    invalidHashMessage(contractPath: string): string {
      return `${contractPath} - invalid hash`;
    },
    validHashMessage(contractPath: string): string {
      return `${contractPath} - valid hash`;
    },
    contractNotExistedOnDisk(contractPath: string): string {
      return `${contractPath} - not existed on disk`;
    },
    categoryWillDownloaded(categoryName: string): string {
      return `OpenZeppelin category will be downloaded: ${categoryName}`;
    },
    fileNow(count: number): string {
      return `${count} file(s) on OpenZeppelin library now`;
    },
    invalidVersionDialog(version: string, location: string, lastVersion: string) {
      return `There is invalid OpenZeppelin version (${version}) in ${location}. ` +
        `Do you want to use the latest one (${lastVersion})?`;
    },
  };

  public static initialize(context: ExtensionContext) {
    this.extensionContext = context;
    this.temporaryDirectory = context.storagePath ? context.storagePath : os.tmpdir();
    this.webViewPages.contractUI.path = context.asAbsolutePath(path.join('resources', 'drizzle', 'index.html'));
    this.webViewPages.welcome.path = context.asAbsolutePath(path.join('resources', 'welcome', 'index.html'));
    this.webViewPages.requirements.path = context.asAbsolutePath(path.join('resources', 'welcome', 'prereqs.html'));
    this.webViewPages.generateToken.path = context.asAbsolutePath(
      path.join('resources', 'tokenui', 'generateToken.html'));
    this.infuraFileResponse.path = context.asAbsolutePath(path.join('resources', 'codeFlowResult', 'index.html'));
    this.infuraFileResponse.css = context.asAbsolutePath(path.join('resources', 'codeFlowResult', 'main.css'));

    this.treeItemData.group.azure.member.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'ABS-member.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'ABS-member.svg')),
    };

    this.treeItemData.group.bdm.input.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'BlockchainDataManagerGroupInput.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'BlockchainDataManagerGroupInput.svg')),
    };

    this.treeItemData.group.bdm.output.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'BlockchainDataManagerGroupOutput.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'BlockchainDataManagerGroupOutput.svg')),
    };

    this.treeItemData.network.default.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'EthereumNetwork.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'EthereumNetwork.svg')),
    };

    this.treeItemData.network.azure.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'ABNetwork.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'ABNetwork.svg')),
    };

    this.treeItemData.network.bdm.application.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'BlockchainDataManagerApplication.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'BlockchainDataManagerApplication.svg')),
    };

    this.treeItemData.network.bdm.input.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'ABNetwork.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'ABNetwork.svg')),
    };

    this.treeItemData.network.bdm.output.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'BlockchainDataManagerOutput.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'BlockchainDataManagerOutput.svg')),
    };

    this.treeItemData.network.infura.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'EthereumNetwork.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'EthereumNetwork.svg')),
    };

    this.treeItemData.network.local.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'LocalNetwork.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'LocalNetwork.svg')),
    };

    this.treeItemData.project.azure.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'ABS-consortium.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'ABS-consortium.svg')),
    };

    this.treeItemData.project.bdm.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'BlockchainDataManager-service_and_project.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'BlockchainDataManager-service_and_project.svg')),
    };

    this.treeItemData.project.infura.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'InfuraProject.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'InfuraProject.svg')),
    };

    this.treeItemData.project.local.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'LocalProject.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'LocalProject.svg')),
    };

    this.treeItemData.service.azure.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'ABS-service.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'ABS-service.svg')),
    };

    this.treeItemData.service.bdm.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'BlockchainDataManager-service_and_project.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'BlockchainDataManager-service_and_project.svg')),
    };

    this.treeItemData.service.infura.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'InfuraService.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'InfuraService.svg')),
    };

    this.treeItemData.service.local.iconPath = {
      dark: context.asAbsolutePath(path.join('resources/dark', 'LocalService.svg')),
      light: context.asAbsolutePath(path.join('resources/light', 'LocalService.svg')),
    };
  }

  private static getMessageChildAlreadyConnected(consortium: string): string {
    return `Connection to '${consortium}' already exists`;
  }

  private static getMessageValueOrDefault(valueName: string, defaultValue: any): string {
    return `Enter ${valueName}. Default value is `
      + `${defaultValue}. `
      + 'Press Enter for default.';
  }

  private static getMessageResourceGroupAlreadyExist(resourceGroupName: string): string {
    return `A resource group with the same name: ${resourceGroupName} already exists. Please select other name`;
  }

  private static getMessageContractsBuildDirectoryIsEmpty(buildDirPath: string): string {
    return `Contracts build directory "${buildDirPath}" is empty.`;
  }

  private static getMessageContractsBuildDirectoryDoesNotExist(buildDirPath: string): string {
    return `Contracts build directory "${buildDirPath}" does not exist.`;
  }

  private static getMessageNetworkAlreadyExist(networkName: string): string {
    return `Network with name "${networkName}" already existed in truffle-config.js`;
  }

  private static getMessageNetworkNotFound(networkName: string): string {
    return `Network with name "${networkName}" not found in truffle-config.js`;
  }

  private static getMessageVariableShouldBeDefined(variable: string): string {
    return `${variable} should be defined`;
  }

  private static getMessageLengthRange(min: number, max: number): string {
    return `Length must be between ${min} and ${max} characters`;
  }

  private static getMessageInputHasUnresolvedSymbols(unresolvedSymbols: string): string {
    return `Input value must not have '${unresolvedSymbols}'.`;
  }

  private static getMessageOpenZeppelinFilesAreInvalid(invalidFilePaths: string[]): string {
    return `OpenZeppelin files have been modified or removed:
      ${invalidFilePaths.join('; ')}. Please revert changes or download them again.`;
  }
}
