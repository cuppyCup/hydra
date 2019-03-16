package configuration

import (
	"github.com/ory/fosite"
	"github.com/ory/x/tracing"
	"net/url"
	"time"
)

type Provider interface {
	//ServesHTTPS() bool
	//HashSignature() bool
	//IsUsingJWTAsAccessTokens() bool
	WellKnownKeys(include ...string) []string


	SubjectTypesSupported() []string
	ConsentURL() *url.URL
	ErrorURL() *url.URL
	PublicURL() *url.URL
	AdminURL() *url.URL
	IssuerURL() *url.URL
	OAuth2AuthURL() string
	OAuth2ClientRegistrationURL() *url.URL
	AllowTLSTerminationFrom() []string
	AccessTokenStrategy() string
	SubjectIdentifierAlgorithmSalt() string
	OIDCDiscoverySupportedScope() []string
	OIDCDiscoveryUserinfoEndpoint() string
	ShareOAuth2Debug() bool
	DSN() string
	BCryptCost() int
	DataSourcePlugin() string
	DefaultClientScope() []string
	AdminListenOn() string
	PublicListenOn() string
	ConsentRequestMaxAge() time.Duration
	AccessTokenLifespan() time.Duration
	RefreshTokenLifespan() time.Duration
	IDTokenLifespan() time.Duration
	AuthCodeLifespan() time.Duration
	ScopeStrategy() fosite.ScopeStrategy
	TracingServiceName() string
	TracingProvider() string
	TracingJaegerConfig() *tracing.JaegerConfig
	GetCookieSecrets() [][]byte
	GetRotatedSystemSecrets() [][]byte
	GetSystemSecret() []byte
	LogoutRedirectURL() *url.URL
	LoginURL() *url.URL
}

func MustValidate(p Provider) {
}
