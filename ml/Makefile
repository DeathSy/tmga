test-lint:
	pylint api/models.py api/serializers.py api/urls.py

test-coverage:
	coverage run --source='.' manage.py test api
	coverage html --omit=ml/wsgi.py,manage.py,api/apps.py