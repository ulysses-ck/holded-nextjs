import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'holded/1.4 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Get all your contact.
   *
   * @summary List Contacts
   */
  listContacts(metadata?: types.ListContactsMetadataParam): Promise<FetchResponse<200, types.ListContactsResponse200>> {
    return this.core.fetch('/contacts', 'get', metadata);
  }

  /**
   * Create a new contact.
   *
   * @summary Create Contact
   */
  createContact(body?: types.CreateContactBodyParam): Promise<FetchResponse<201, types.CreateContactResponse201>> {
    return this.core.fetch('/contacts', 'post', body);
  }

  /**
   * Get a specific contact.
   *
   * @summary Get Contact
   */
  getContact(metadata: types.GetContactMetadataParam): Promise<FetchResponse<200, types.GetContactResponse200>> {
    return this.core.fetch('/contacts/{contactId}', 'get', metadata);
  }

  /**
   * Update a specific contact.
   *
   * Only the params included in the operation will update the contact.
   *
   * @summary Update Contact
   */
  updateContact(body: types.UpdateContactBodyParam, metadata: types.UpdateContactMetadataParam): Promise<FetchResponse<200, types.UpdateContactResponse200>>;
  updateContact(metadata: types.UpdateContactMetadataParam): Promise<FetchResponse<200, types.UpdateContactResponse200>>;
  updateContact(body?: types.UpdateContactBodyParam | types.UpdateContactMetadataParam, metadata?: types.UpdateContactMetadataParam): Promise<FetchResponse<200, types.UpdateContactResponse200>> {
    return this.core.fetch('/contacts/{contactId}', 'put', body, metadata);
  }

  /**
   * Delete specific contact
   *
   * @summary Delete Contact
   */
  deleteContact(metadata: types.DeleteContactMetadataParam): Promise<FetchResponse<200, types.DeleteContactResponse200>> {
    return this.core.fetch('/contacts/{contactId}', 'delete', metadata);
  }

  /**
   * Get attachments list for a given contact.
   *
   * @summary Get contact attachments list
   */
  getAttachmentsList(metadata: types.GetAttachmentsListMetadataParam): Promise<FetchResponse<200, types.GetAttachmentsListResponse200>> {
    return this.core.fetch('/contacts/{contactId}/attachments/list', 'get', metadata);
  }

  /**
   * Get attachment
   *
   * @summary Get attachment
   */
  getAttachment(metadata: types.GetAttachmentMetadataParam): Promise<FetchResponse<200, types.GetAttachmentResponse200>> {
    return this.core.fetch('/contacts/{contactId}/attachments/get', 'get', metadata);
  }

  /**
   * List Contact Groups
   *
   */
  listContactGroups(): Promise<FetchResponse<200, types.ListContactGroupsResponse200>> {
    return this.core.fetch('/contacts/groups', 'get');
  }

  /**
   * Create Contact Group
   *
   */
  createContactGroup(body: types.CreateContactGroupBodyParam): Promise<FetchResponse<201, types.CreateContactGroupResponse201>> {
    return this.core.fetch('/contacts/groups', 'post', body);
  }

  /**
   * Get Contact Group
   *
   */
  getContactGroup(metadata: types.GetContactGroupMetadataParam): Promise<FetchResponse<200, types.GetContactGroupResponse200>> {
    return this.core.fetch('/contacts/groups/{groupId}', 'get', metadata);
  }

  /**
   * Update Contact Group
   *
   */
  updateContactGroup(body: types.UpdateContactGroupBodyParam, metadata: types.UpdateContactGroupMetadataParam): Promise<FetchResponse<200, types.UpdateContactGroupResponse200>>;
  updateContactGroup(metadata: types.UpdateContactGroupMetadataParam): Promise<FetchResponse<200, types.UpdateContactGroupResponse200>>;
  updateContactGroup(body?: types.UpdateContactGroupBodyParam | types.UpdateContactGroupMetadataParam, metadata?: types.UpdateContactGroupMetadataParam): Promise<FetchResponse<200, types.UpdateContactGroupResponse200>> {
    return this.core.fetch('/contacts/groups/{groupId}', 'put', body, metadata);
  }

  /**
   * Delete Contact Group
   *
   */
  deleteContactGroup(metadata: types.DeleteContactGroupMetadataParam): Promise<FetchResponse<200, types.DeleteContactGroupResponse200>> {
    return this.core.fetch('/contacts/groups/{groupId}', 'delete', metadata);
  }

  /**
   * List Products
   *
   */
  listProducts(): Promise<FetchResponse<200, types.ListProductsResponse200>> {
    return this.core.fetch('/products', 'get');
  }

  /**
   * Create Product
   *
   */
  createProduct(body?: types.CreateProductBodyParam): Promise<FetchResponse<201, types.CreateProductResponse201>> {
    return this.core.fetch('/products', 'post', body);
  }

  /**
   * Update Product
   *
   */
  updateProduct(body: types.UpdateProductBodyParam, metadata: types.UpdateProductMetadataParam): Promise<FetchResponse<200, types.UpdateProductResponse200>>;
  updateProduct(metadata: types.UpdateProductMetadataParam): Promise<FetchResponse<200, types.UpdateProductResponse200>>;
  updateProduct(body?: types.UpdateProductBodyParam | types.UpdateProductMetadataParam, metadata?: types.UpdateProductMetadataParam): Promise<FetchResponse<200, types.UpdateProductResponse200>> {
    return this.core.fetch('/products/{productId}', 'put', body, metadata);
  }

  /**
   * Delete Product
   *
   */
  deleteProduct(metadata: types.DeleteProductMetadataParam): Promise<FetchResponse<200, types.DeleteProductResponse200>> {
    return this.core.fetch('/products/{productId}', 'delete', metadata);
  }

  /**
   * Get a speccific product
   *
   * @summary Get  Product
   */
  getProduct(metadata: types.GetProductMetadataParam): Promise<FetchResponse<200, types.GetProductResponse200>> {
    return this.core.fetch('/products/{productId}', 'get', metadata);
  }

  /**
   * List Warehouses
   *
   */
  listWarehouses(): Promise<FetchResponse<200, types.ListWarehousesResponse200>> {
    return this.core.fetch('/warehouses', 'get');
  }

  /**
   * Create Warehouse
   *
   */
  createWarehouse(body?: types.CreateWarehouseBodyParam): Promise<FetchResponse<201, types.CreateWarehouseResponse201>> {
    return this.core.fetch('/warehouses', 'post', body);
  }

  /**
   * List products stock
   *
   */
  listProductsStock(metadata: types.ListProductsStockMetadataParam): Promise<FetchResponse<200, types.ListProductsStockResponse200>> {
    return this.core.fetch('/warehouses/{warehouseId}/stock', 'get', metadata);
  }

  /**
   * Get Warehouse
   *
   */
  getWarehouse(metadata: types.GetWarehouseMetadataParam): Promise<FetchResponse<200, types.GetWarehouseResponse200>> {
    return this.core.fetch('/warehouses/{warehouseId}', 'get', metadata);
  }

  /**
   * Update Warehouse
   *
   */
  updateWarehouse(body: types.UpdateWarehouseBodyParam, metadata: types.UpdateWarehouseMetadataParam): Promise<FetchResponse<200, types.UpdateWarehouseResponse200>>;
  updateWarehouse(metadata: types.UpdateWarehouseMetadataParam): Promise<FetchResponse<200, types.UpdateWarehouseResponse200>>;
  updateWarehouse(body?: types.UpdateWarehouseBodyParam | types.UpdateWarehouseMetadataParam, metadata?: types.UpdateWarehouseMetadataParam): Promise<FetchResponse<200, types.UpdateWarehouseResponse200>> {
    return this.core.fetch('/warehouses/{warehouseId}', 'put', body, metadata);
  }

  /**
   * Delete Warehouse
   *
   */
  deleteWarehouse(metadata: types.DeleteWarehouseMetadataParam): Promise<FetchResponse<200, types.DeleteWarehouseResponse200>> {
    return this.core.fetch('/warehouses/{warehouseId}', 'delete', metadata);
  }

  /**
   * Get all the taxes information for a specific account
   *
   * @summary Get Taxes
   */
  getTaxes(): Promise<FetchResponse<200, types.GetTaxesResponse200>> {
    return this.core.fetch('/taxes', 'get');
  }

  /**
   * List Treasuries Accounts
   *
   */
  listTreasuries(): Promise<FetchResponse<200, types.ListTreasuriesResponse200>> {
    return this.core.fetch('/treasury', 'get');
  }

  /**
   * Create Treasury Account
   *
   */
  createTreasury(body?: types.CreateTreasuryBodyParam): Promise<FetchResponse<201, types.CreateTreasuryResponse201>> {
    return this.core.fetch('/treasury', 'post', body);
  }

  /**
   * Get Treasury Account
   *
   */
  getTreasury(metadata: types.GetTreasuryMetadataParam): Promise<FetchResponse<200, types.GetTreasuryResponse200>> {
    return this.core.fetch('/treasury/{treasuryId}', 'get', metadata);
  }

  /**
   * Get Numbering Series by Type
   *
   */
  getNumberingSeries(metadata: types.GetNumberingSeriesMetadataParam): Promise<FetchResponse<200, types.GetNumberingSeriesResponse200>> {
    return this.core.fetch('/numberingseries/{type}', 'get', metadata);
  }

  /**
   * Create Numbering Serie
   *
   */
  createNumberingSerie(body: types.CreateNumberingSerieBodyParam, metadata: types.CreateNumberingSerieMetadataParam): Promise<FetchResponse<201, types.CreateNumberingSerieResponse201>>;
  createNumberingSerie(metadata: types.CreateNumberingSerieMetadataParam): Promise<FetchResponse<201, types.CreateNumberingSerieResponse201>>;
  createNumberingSerie(body?: types.CreateNumberingSerieBodyParam | types.CreateNumberingSerieMetadataParam, metadata?: types.CreateNumberingSerieMetadataParam): Promise<FetchResponse<201, types.CreateNumberingSerieResponse201>> {
    return this.core.fetch('/numberingseries/{type}', 'post', body, metadata);
  }

  /**
   * Update Numbering Serie
   *
   */
  updateNumberingSerie(body: types.UpdateNumberingSerieBodyParam, metadata: types.UpdateNumberingSerieMetadataParam): Promise<FetchResponse<200, types.UpdateNumberingSerieResponse200>>;
  updateNumberingSerie(metadata: types.UpdateNumberingSerieMetadataParam): Promise<FetchResponse<200, types.UpdateNumberingSerieResponse200>>;
  updateNumberingSerie(body?: types.UpdateNumberingSerieBodyParam | types.UpdateNumberingSerieMetadataParam, metadata?: types.UpdateNumberingSerieMetadataParam): Promise<FetchResponse<200, types.UpdateNumberingSerieResponse200>> {
    return this.core.fetch('/numberingseries/{type}/{numberingSeriesId}', 'put', body, metadata);
  }

  /**
   * Delete Numbering Serie
   *
   */
  deleteNumberingSerie(metadata: types.DeleteNumberingSerieMetadataParam): Promise<FetchResponse<200, types.DeleteNumberingSerieResponse200>> {
    return this.core.fetch('/numberingseries/{type}/{numberingSeriesId}', 'delete', metadata);
  }

  /**
   * List all your expenses accounts.
   *
   * @summary List Expenses Accounts
   */
  listExpensesAccounts(): Promise<FetchResponse<200, types.ListExpensesAccountsResponse200>> {
    return this.core.fetch('/expensesaccounts', 'get');
  }

  /**
   * Create an expenses account.
   *
   * @summary Create Expenses Account
   */
  createExpensesAccount(body: types.CreateExpensesAccountBodyParam): Promise<FetchResponse<201, types.CreateExpensesAccountResponse201>> {
    return this.core.fetch('/expensesaccounts', 'post', body);
  }

  /**
   * Get a specific expenses account.
   *
   * @summary Get Expenses Account
   */
  getExpensesAccount(metadata: types.GetExpensesAccountMetadataParam): Promise<FetchResponse<200, types.GetExpensesAccountResponse200>> {
    return this.core.fetch('/expensesaccounts/{expensesAccountId}', 'get', metadata);
  }

  /**
   * Update a specific expenses account.
   *
   * @summary Update Expenses Account
   */
  updateExpensesAccount(body: types.UpdateExpensesAccountBodyParam, metadata: types.UpdateExpensesAccountMetadataParam): Promise<FetchResponse<200, types.UpdateExpensesAccountResponse200>>;
  updateExpensesAccount(metadata: types.UpdateExpensesAccountMetadataParam): Promise<FetchResponse<200, types.UpdateExpensesAccountResponse200>>;
  updateExpensesAccount(body?: types.UpdateExpensesAccountBodyParam | types.UpdateExpensesAccountMetadataParam, metadata?: types.UpdateExpensesAccountMetadataParam): Promise<FetchResponse<200, types.UpdateExpensesAccountResponse200>> {
    return this.core.fetch('/expensesaccounts/{expensesAccountId}', 'put', body, metadata);
  }

  /**
   * Delete a specific expenses account.
   *
   * @summary Delete Expenses Account
   */
  deleteExpensesAccount(metadata: types.DeleteExpensesAccountMetadataParam): Promise<FetchResponse<200, types.DeleteExpensesAccountResponse200>> {
    return this.core.fetch('/expensesaccounts/{expensesAccountId}', 'delete', metadata);
  }

  /**
   * List Sales Channels
   *
   */
  listSalesChannels(): Promise<FetchResponse<200, types.ListSalesChannelsResponse200>> {
    return this.core.fetch('/saleschannels', 'get');
  }

  /**
   * Create Sales Channel
   *
   */
  createSalesChannel(body: types.CreateSalesChannelBodyParam): Promise<FetchResponse<201, types.CreateSalesChannelResponse201>> {
    return this.core.fetch('/saleschannels', 'post', body);
  }

  /**
   * Get Sales Channel
   *
   */
  getSalesChannel(metadata: types.GetSalesChannelMetadataParam): Promise<FetchResponse<200, types.GetSalesChannelResponse200>> {
    return this.core.fetch('/saleschannels/{salesChannelId}', 'get', metadata);
  }

  /**
   * Update Sales Channel
   *
   */
  updateSalesChannel(body: types.UpdateSalesChannelBodyParam, metadata: types.UpdateSalesChannelMetadataParam): Promise<FetchResponse<200, types.UpdateSalesChannelResponse200>>;
  updateSalesChannel(metadata: types.UpdateSalesChannelMetadataParam): Promise<FetchResponse<200, types.UpdateSalesChannelResponse200>>;
  updateSalesChannel(body?: types.UpdateSalesChannelBodyParam | types.UpdateSalesChannelMetadataParam, metadata?: types.UpdateSalesChannelMetadataParam): Promise<FetchResponse<200, types.UpdateSalesChannelResponse200>> {
    return this.core.fetch('/saleschannels/{salesChannelId}', 'put', body, metadata);
  }

  /**
   * Delete Sales Channel
   *
   */
  deleteSalesChannel(metadata: types.DeleteSalesChannelMetadataParam): Promise<FetchResponse<200, types.DeleteSalesChannelResponse200>> {
    return this.core.fetch('/saleschannels/{salesChannelId}', 'delete', metadata);
  }

  /**
   * List Payments
   *
   */
  listPayments(metadata?: types.ListPaymentsMetadataParam): Promise<FetchResponse<200, types.ListPaymentsResponse200>> {
    return this.core.fetch('/payments', 'get', metadata);
  }

  /**
   * Create Payment
   *
   */
  createPayment(body?: types.CreatePaymentBodyParam): Promise<FetchResponse<201, types.CreatePaymentResponse201>> {
    return this.core.fetch('/payments', 'post', body);
  }

  /**
   * Get Payment
   *
   */
  getPayment(metadata: types.GetPaymentMetadataParam): Promise<FetchResponse<200, types.GetPaymentResponse200>> {
    return this.core.fetch('/payments/{paymentId}', 'get', metadata);
  }

  /**
   * Update Payment
   *
   */
  updatePayment(body: types.UpdatePaymentBodyParam, metadata: types.UpdatePaymentMetadataParam): Promise<FetchResponse<200, types.UpdatePaymentResponse200>>;
  updatePayment(metadata: types.UpdatePaymentMetadataParam): Promise<FetchResponse<200, types.UpdatePaymentResponse200>>;
  updatePayment(body?: types.UpdatePaymentBodyParam | types.UpdatePaymentMetadataParam, metadata?: types.UpdatePaymentMetadataParam): Promise<FetchResponse<200, types.UpdatePaymentResponse200>> {
    return this.core.fetch('/payments/{paymentId}', 'put', body, metadata);
  }

  /**
   * Delete Payment
   *
   */
  deletePayment(metadata: types.DeletePaymentMetadataParam): Promise<FetchResponse<200, types.DeletePaymentResponse200>> {
    return this.core.fetch('/payments/{paymentId}', 'delete', metadata);
  }

  /**
   * Get all your documents by type.
   *
   * @summary List Documents
   */
  listDocuments(metadata: types.ListDocumentsMetadataParam): Promise<FetchResponse<200, types.ListDocumentsResponse200>> {
    return this.core.fetch('/documents/{docType}', 'get', metadata);
  }

  /**
   * Create a new document type.
   *
   * @summary Create Document
   */
  createDocument(body: types.CreateDocumentBodyParam, metadata: types.CreateDocumentMetadataParam): Promise<FetchResponse<201, types.CreateDocumentResponse201>> {
    return this.core.fetch('/documents/{docType}', 'post', body, metadata);
  }

  /**
   * Get a specific document.
   *
   * @summary Get Document
   */
  getDocument(metadata: types.GetDocumentMetadataParam): Promise<FetchResponse<200, types.GetDocumentResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}', 'get', metadata);
  }

  /**
   * Update a specific document. {lotSku} field is only needed when {kind} is lots.
   *
   * @summary Update Document
   */
  updateDocument(body: types.UpdateDocumentBodyParam, metadata: types.UpdateDocumentMetadataParam): Promise<FetchResponse<200, types.UpdateDocumentResponse200>>;
  updateDocument(metadata: types.UpdateDocumentMetadataParam): Promise<FetchResponse<200, types.UpdateDocumentResponse200>>;
  updateDocument(body?: types.UpdateDocumentBodyParam | types.UpdateDocumentMetadataParam, metadata?: types.UpdateDocumentMetadataParam): Promise<FetchResponse<200, types.UpdateDocumentResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}', 'put', body, metadata);
  }

  /**
   * Delete specific document type.
   *
   * @summary Delete Document
   */
  deleteDocument(metadata: types.DeleteDocumentMetadataParam): Promise<FetchResponse<200, types.DeleteDocumentResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}', 'delete', metadata);
  }

  /**
   * Pay one specific document
   *
   * @summary Pay Document
   */
  payDocument(body: types.PayDocumentBodyParam, metadata: types.PayDocumentMetadataParam): Promise<FetchResponse<200, types.PayDocumentResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}/pay', 'post', body, metadata);
  }

  /**
   * Send a specific document by email.
   *
   * @summary Send Document
   */
  sendDocument(body: types.SendDocumentBodyParam, metadata: types.SendDocumentMetadataParam): Promise<FetchResponse<200, types.SendDocumentResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}/send', 'post', body, metadata);
  }

  /**
   * Get a specific document pdf.
   *
   * @summary Get Document PDF
   */
  getDocumentPDF(metadata: types.GetDocumentPdfMetadataParam): Promise<FetchResponse<200, types.GetDocumentPdfResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}/pdf', 'get', metadata);
  }

  /**
   * Ship all the items of a specific sales order.
   *
   * @summary Ship All Items
   */
  shipAllItems(metadata: types.ShipAllItemsMetadataParam): Promise<FetchResponse<200, types.ShipAllItemsResponse200>> {
    return this.core.fetch('/documents/salesorder/{documentId}/shipall', 'post', metadata);
  }

  /**
   * Ship a specific item of a specific sales order (itemLinePosition starts at 0).
   *
   * @summary Ship items by line
   */
  shipItemsByLine(body: types.ShipItemsByLineBodyParam, metadata: types.ShipItemsByLineMetadataParam): Promise<FetchResponse<200, types.ShipItemsByLineResponse200>>;
  shipItemsByLine(metadata: types.ShipItemsByLineMetadataParam): Promise<FetchResponse<200, types.ShipItemsByLineResponse200>>;
  shipItemsByLine(body?: types.ShipItemsByLineBodyParam | types.ShipItemsByLineMetadataParam, metadata?: types.ShipItemsByLineMetadataParam): Promise<FetchResponse<200, types.ShipItemsByLineResponse200>> {
    return this.core.fetch('/documents/salesorder/{documentId}/shipbylines', 'post', body, metadata);
  }

  /**
   * For each item included in a sales or purchase order, get the number of units shipped or
   * recieved.
   *
   * @summary Shipped units by item
   */
  shippedUnitsByItem(metadata: types.ShippedUnitsByItemMetadataParam): Promise<FetchResponse<200, types.ShippedUnitsByItemResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}/shippeditems', 'get', metadata);
  }

  /**
   * Attach File to a specific document.
   *
   * @summary Attach File to a specific document
   */
  attachFile(body: types.AttachFileBodyParam, metadata: types.AttachFileMetadataParam): Promise<FetchResponse<200, types.AttachFileResponse200>>;
  attachFile(metadata: types.AttachFileMetadataParam): Promise<FetchResponse<200, types.AttachFileResponse200>>;
  attachFile(body?: types.AttachFileBodyParam | types.AttachFileMetadataParam, metadata?: types.AttachFileMetadataParam): Promise<FetchResponse<200, types.AttachFileResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}/attach', 'post', body, metadata);
  }

  /**
   * Update tracking info from specific document.
   *
   * @summary Update tracking info from specific document.
   */
  updateTrackingInfo(body: types.UpdateTrackingInfoBodyParam, metadata: types.UpdateTrackingInfoMetadataParam): Promise<FetchResponse<200, types.UpdateTrackingInfoResponse200>>;
  updateTrackingInfo(metadata: types.UpdateTrackingInfoMetadataParam): Promise<FetchResponse<200, types.UpdateTrackingInfoResponse200>>;
  updateTrackingInfo(body?: types.UpdateTrackingInfoBodyParam | types.UpdateTrackingInfoMetadataParam, metadata?: types.UpdateTrackingInfoMetadataParam): Promise<FetchResponse<200, types.UpdateTrackingInfoResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}/updatetracking', 'post', body, metadata);
  }

  /**
   * Update pipeline from specific document.
   *
   * @summary Update pipeline from specific document.
   */
  updateDocumentPipeline(body: types.UpdateDocumentPipelineBodyParam, metadata: types.UpdateDocumentPipelineMetadataParam): Promise<FetchResponse<200, types.UpdateDocumentPipelineResponse200>>;
  updateDocumentPipeline(metadata: types.UpdateDocumentPipelineMetadataParam): Promise<FetchResponse<200, types.UpdateDocumentPipelineResponse200>>;
  updateDocumentPipeline(body?: types.UpdateDocumentPipelineBodyParam | types.UpdateDocumentPipelineMetadataParam, metadata?: types.UpdateDocumentPipelineMetadataParam): Promise<FetchResponse<200, types.UpdateDocumentPipelineResponse200>> {
    return this.core.fetch('/documents/{docType}/{documentId}/pipeline/set', 'post', body, metadata);
  }

  /**
   * List Payment methods
   *
   * @summary List Payment methods
   */
  listPaymentMethods(): Promise<FetchResponse<200, types.ListPaymentMethodsResponse200>> {
    return this.core.fetch('/paymentmethods', 'get');
  }

  /**
   * List Remittances
   *
   */
  listRemittances(): Promise<FetchResponse<200, types.ListRemittancesResponse200>> {
    return this.core.fetch('/remittances', 'get');
  }

  /**
   * Get Remittance
   *
   */
  getRemittance(metadata: types.GetRemittanceMetadataParam): Promise<FetchResponse<200, types.GetRemittanceResponse200>> {
    return this.core.fetch('/remittances/{remittanceId}', 'get', metadata);
  }

  /**
   * Get the main image of a specific product
   *
   * @summary Get Product Main Image
   */
  getProductImage(metadata: types.GetProductImageMetadataParam): Promise<FetchResponse<200, types.GetProductImageResponse200>> {
    return this.core.fetch('/products/{productId}/image', 'get', metadata);
  }

  /**
   * List all secondary product images
   *
   * @summary List Product Images
   */
  listProductImages(metadata: types.ListProductImagesMetadataParam): Promise<FetchResponse<200, types.ListProductImagesResponse200>> {
    return this.core.fetch('/products/{productId}/imagesList', 'get', metadata);
  }

  /**
   * Get a specific secondary Image
   *
   * @summary Get Product Secondary Image
   */
  getProductsProductidImageImagefilename(metadata: types.GetProductsProductidImageImagefilenameMetadataParam): Promise<FetchResponse<200, types.GetProductsProductidImageImagefilenameResponse200>> {
    return this.core.fetch('/products/{productId}/image/{imageFileName}', 'get', metadata);
  }

  /**
   * Update Product stock
   *
   */
  updateProductStock(body: types.UpdateProductStockBodyParam, metadata: types.UpdateProductStockMetadataParam): Promise<FetchResponse<200, types.UpdateProductStockResponse200>>;
  updateProductStock(metadata: types.UpdateProductStockMetadataParam): Promise<FetchResponse<200, types.UpdateProductStockResponse200>>;
  updateProductStock(body?: types.UpdateProductStockBodyParam | types.UpdateProductStockMetadataParam, metadata?: types.UpdateProductStockMetadataParam): Promise<FetchResponse<200, types.UpdateProductStockResponse200>> {
    return this.core.fetch('/products/{productId}/stock', 'put', body, metadata);
  }

  /**
   * List Services
   *
   */
  listServices(): Promise<FetchResponse<200, types.ListServicesResponse200>> {
    return this.core.fetch('/services', 'get');
  }

  /**
   * Create Service
   *
   */
  createService(body?: types.CreateServiceBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services', 'post', body);
  }

  /**
   * Get Service
   *
   */
  getService(metadata: types.GetServiceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}', 'get', metadata);
  }

  /**
   * Update Service
   *
   */
  updateService(body: types.UpdateServiceBodyParam, metadata: types.UpdateServiceMetadataParam): Promise<FetchResponse<200, types.UpdateServiceResponse200>>;
  updateService(metadata: types.UpdateServiceMetadataParam): Promise<FetchResponse<200, types.UpdateServiceResponse200>>;
  updateService(body?: types.UpdateServiceBodyParam | types.UpdateServiceMetadataParam, metadata?: types.UpdateServiceMetadataParam): Promise<FetchResponse<200, types.UpdateServiceResponse200>> {
    return this.core.fetch('/services/{serviceId}', 'put', body, metadata);
  }

  /**
   * Delete Service
   *
   */
  deleteService(metadata: types.DeleteServiceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}', 'delete', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AttachFileBodyParam, AttachFileMetadataParam, AttachFileResponse200, CreateContactBodyParam, CreateContactGroupBodyParam, CreateContactGroupResponse201, CreateContactResponse201, CreateDocumentBodyParam, CreateDocumentMetadataParam, CreateDocumentResponse201, CreateExpensesAccountBodyParam, CreateExpensesAccountResponse201, CreateNumberingSerieBodyParam, CreateNumberingSerieMetadataParam, CreateNumberingSerieResponse201, CreatePaymentBodyParam, CreatePaymentResponse201, CreateProductBodyParam, CreateProductResponse201, CreateSalesChannelBodyParam, CreateSalesChannelResponse201, CreateServiceBodyParam, CreateTreasuryBodyParam, CreateTreasuryResponse201, CreateWarehouseBodyParam, CreateWarehouseResponse201, DeleteContactGroupMetadataParam, DeleteContactGroupResponse200, DeleteContactMetadataParam, DeleteContactResponse200, DeleteDocumentMetadataParam, DeleteDocumentResponse200, DeleteExpensesAccountMetadataParam, DeleteExpensesAccountResponse200, DeleteNumberingSerieMetadataParam, DeleteNumberingSerieResponse200, DeletePaymentMetadataParam, DeletePaymentResponse200, DeleteProductMetadataParam, DeleteProductResponse200, DeleteSalesChannelMetadataParam, DeleteSalesChannelResponse200, DeleteServiceMetadataParam, DeleteWarehouseMetadataParam, DeleteWarehouseResponse200, GetAttachmentMetadataParam, GetAttachmentResponse200, GetAttachmentsListMetadataParam, GetAttachmentsListResponse200, GetContactGroupMetadataParam, GetContactGroupResponse200, GetContactMetadataParam, GetContactResponse200, GetDocumentMetadataParam, GetDocumentPdfMetadataParam, GetDocumentPdfResponse200, GetDocumentResponse200, GetExpensesAccountMetadataParam, GetExpensesAccountResponse200, GetNumberingSeriesMetadataParam, GetNumberingSeriesResponse200, GetPaymentMetadataParam, GetPaymentResponse200, GetProductImageMetadataParam, GetProductImageResponse200, GetProductMetadataParam, GetProductResponse200, GetProductsProductidImageImagefilenameMetadataParam, GetProductsProductidImageImagefilenameResponse200, GetRemittanceMetadataParam, GetRemittanceResponse200, GetSalesChannelMetadataParam, GetSalesChannelResponse200, GetServiceMetadataParam, GetTaxesResponse200, GetTreasuryMetadataParam, GetTreasuryResponse200, GetWarehouseMetadataParam, GetWarehouseResponse200, ListContactGroupsResponse200, ListContactsMetadataParam, ListContactsResponse200, ListDocumentsMetadataParam, ListDocumentsResponse200, ListExpensesAccountsResponse200, ListPaymentMethodsResponse200, ListPaymentsMetadataParam, ListPaymentsResponse200, ListProductImagesMetadataParam, ListProductImagesResponse200, ListProductsResponse200, ListProductsStockMetadataParam, ListProductsStockResponse200, ListRemittancesResponse200, ListSalesChannelsResponse200, ListServicesResponse200, ListTreasuriesResponse200, ListWarehousesResponse200, PayDocumentBodyParam, PayDocumentMetadataParam, PayDocumentResponse200, SendDocumentBodyParam, SendDocumentMetadataParam, SendDocumentResponse200, ShipAllItemsMetadataParam, ShipAllItemsResponse200, ShipItemsByLineBodyParam, ShipItemsByLineMetadataParam, ShipItemsByLineResponse200, ShippedUnitsByItemMetadataParam, ShippedUnitsByItemResponse200, UpdateContactBodyParam, UpdateContactGroupBodyParam, UpdateContactGroupMetadataParam, UpdateContactGroupResponse200, UpdateContactMetadataParam, UpdateContactResponse200, UpdateDocumentBodyParam, UpdateDocumentMetadataParam, UpdateDocumentPipelineBodyParam, UpdateDocumentPipelineMetadataParam, UpdateDocumentPipelineResponse200, UpdateDocumentResponse200, UpdateExpensesAccountBodyParam, UpdateExpensesAccountMetadataParam, UpdateExpensesAccountResponse200, UpdateNumberingSerieBodyParam, UpdateNumberingSerieMetadataParam, UpdateNumberingSerieResponse200, UpdatePaymentBodyParam, UpdatePaymentMetadataParam, UpdatePaymentResponse200, UpdateProductBodyParam, UpdateProductMetadataParam, UpdateProductResponse200, UpdateProductStockBodyParam, UpdateProductStockMetadataParam, UpdateProductStockResponse200, UpdateSalesChannelBodyParam, UpdateSalesChannelMetadataParam, UpdateSalesChannelResponse200, UpdateServiceBodyParam, UpdateServiceMetadataParam, UpdateServiceResponse200, UpdateTrackingInfoBodyParam, UpdateTrackingInfoMetadataParam, UpdateTrackingInfoResponse200, UpdateWarehouseBodyParam, UpdateWarehouseMetadataParam, UpdateWarehouseResponse200 } from './types';
